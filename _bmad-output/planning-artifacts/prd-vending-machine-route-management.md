---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/vending-machine-route-inventory-management.md
  - _bmad-output/planning-artifacts/market-research-vending-machine-route-management.md
  - _bmad-output/planning-artifacts/brief-vending-machine-route-management.md
workflowType: prd
date: 2026-10-22
author: Root
classification:
  projectType: saas_b2b_mobile
  domain: field_service_route_logistics
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — RouteVend

**Author:** Root
**Date:** 2026-10-22

---

## Executive Summary

RouteVend is a route-first, mobile-native SaaS platform for independent vending machine operators running 10–150 machines across 1–5 routes. It automates the three highest-pain daily workflows: pre-route restocking list generation, offline-capable driver route execution, and cash reconciliation — at flat-rate pricing ($59–$149/month, no per-machine fees).

The market gap is structural: ~10,000–15,000 small US operators are trapped between VendSoft ($49/month, no native mobile app, 30-machine ceiling) and Cantaloupe/Parlevel ($24,057+/year, built for $1M+ operators). No mid-market tool occupies the $59–$149/month tier with route-first design and an offline-capable driver app. A single machine sitting empty for one week costs more than a month's software subscription — RouteVend pays for itself by preventing one missed restock per route per month.

**Target users:** Growth-stage owner-operators (25–100 machines) who have outgrown spreadsheets or VendSoft, and new operators (10–25 machines) scaling toward their first hire.

**Launch channel:** AppSumo LTD ($199–$299 one-time) targeting the price-sensitive operator community, followed by monthly subscriptions.

### What Makes This Special

RouteVend's core insight is that every other vending tool leads with inventory tracking. Operators don't think about inventory — they think about routes. The product leads with the pre-route restocking list: what to load on the truck before leaving the warehouse, per machine, per SKU, aggregated across all stops on the route. This is the moment that determines whether a driver wastes cargo, forgets a top seller, or hits every machine efficiently.

Three structural differentiators separate RouteVend from all alternatives:

1. **Route-first design.** The pre-route restocking list is the primary output, not an afterthought. The entire data model is built around routes, not inventory ledgers.
2. **Flat-rate pricing with no per-machine fees.** Adding a machine costs nothing. Growing from 20 to 50 machines doesn't trigger a pricing conversation. This removes the growth disincentive embedded in every enterprise competitor.
3. **Offline-first driver app.** Drivers work in basements, parking garages, and dead zones. The app works fully without connectivity and syncs in background — the app functions the same regardless of signal.

## Project Classification

- **Project Type:** SaaS B2B with native mobile app (iOS + Android)
- **Domain:** Field service / route logistics / SMB inventory management
- **Complexity:** Medium — offline sync architecture is technically non-trivial; cash handling requires data integrity; multi-tenant data isolation required
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

Operators succeed when software prevents revenue loss they were previously absorbing invisibly.

**Primary user success indicator:** Operator can identify at least one SKU shortage before it becomes a stockout, per route run. The aha moment is the first time the restocking list flags a machine as "likely low on Doritos" before a driver would have noticed manually.

**Driver adoption:** Drivers complete route stops via the mobile app (not clipboards or phone calls to the operator). Success requires the app to be fast enough and simple enough that drivers adopt it without resistance — target is no driver complaints about app usability in first 30 days.

**Onboarding speed:** Operators reach their first pre-route restocking list within 30 minutes of signup. This is the activation gate — if they don't reach a restocking list, they don't retain.

**Cash reconciliation trust:** Operators trust the cash log. Trust breaks immediately if the system auto-corrects discrepancies or hides mismatches. Success means operators review the expected-vs-actual cash summary after each route without anxiety about data accuracy.

### Business Success

| Milestone | Target | Timeframe |
|---|---|---|
| AppSumo LTD units | 100–200 units | Month 1–3 |
| Monthly subscribers | 25 active | Month 3 |
| MRR | $2,000–$3,000 | Month 3 |
| Monthly subscribers | 75 active | Month 6 |
| MRR | $5,000 | Month 6 |
| Monthly churn (post-month-2) | <2% | Month 6+ |
| MRR | $18,000–$25,000 | Month 12 |
| AppSumo review average | ≥4.5 stars at 50+ reviews | Month 6 |
| NPS | ≥50 at day 90 | Ongoing |
| "VendSoft alternative" organic traffic | 500 visits/month | Month 12 |

### Technical Success

- Zero data loss for cash entries logged in offline mode — offline queue must sync successfully on reconnect, 100% of queued entries
- Route completion events correctly attributed to mobile vs. web session (required for driver adoption tracking)
- Cash reconciliation expected-vs-actual calculation accurate to the cent across all logged route stops
- Multi-tenant isolation: operator A cannot access operator B's machines, routes, or cash data
- App available for both iOS and Android via App Store and Google Play within launch window

### Measurable Outcomes

- **Activation rate:** 70% of new accounts generate a pre-route restocking list within 7 days of signup
- **Driver app adoption:** 80% of route stops logged via mobile app (not desktop) by day 60
- **Route cadence:** Active accounts average ≥2 route runs logged per week by month 2
- **Cash reconciliation error rate:** <5% of active accounts raise cash discrepancy support tickets per month
- **Churn after month 2:** <3% for accounts with 2+ routes loaded (data lock-in signal)

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**Philosophy:** Problem-solving MVP. The minimum that makes a route operator say "this is exactly what I needed" is a single pre-route restocking list their driver can act on without calling the operator.

**Core user journeys supported:**
- Owner-operator sets up machines, SKUs, and par levels
- Owner-operator builds a route and generates a pre-route restocking list
- Driver completes a route via mobile app (offline-capable), logs cash and restocked quantities
- Owner-operator reviews cash reconciliation summary after route completion
- Owner-operator monitors machine dashboard for low-stock alerts

**Must-have capabilities (MVP):**
- Route builder: named routes, machine stops, driver assignment, recurring schedule
- Product catalog: SKU definitions with name and package size
- Par levels: per-SKU, per-machine target and minimum quantities
- Pre-route restocking list: auto-generated from par levels 24 hours before scheduled route; aggregated truck load summary
- Driver mobile app (iOS + Android): offline-first, today's route view, navigate to stop, mark serviced, log cash, log restocked quantities, flag issues with photo + note
- Offline sync: all driver actions queue locally and sync when connectivity returns
- Machine dashboard: last serviced date, estimated current inventory, cash to date, fleet urgency sort
- Cash reconciliation log: expected vs. driver-reported cash per machine; weekly/monthly CSV export
- Multi-tenant auth: operators and drivers have separate role access
- Stripe billing: subscription ($59/$99/$149/month) + LTD one-time payment

**MVP resource requirements:** 1–2 full-stack developers, 1 mobile developer (or React Native generalist), 4–6 weeks

### Post-MVP Features (Phase 2)

- Warehouse inventory module: track stock pre-loading; subtract truck load from warehouse counts automatically
- DEX/IoT telemetry integration: Nayax first (largest small-operator installed base); machines report actual inventory, replacing manual counts for connected fleets
- Commission tracking: location owner commission calculation from sales data
- GPS route optimization: auto-sequence machine stops by geography to minimize drive time
- QuickBooks Online integration: route cash and sales data syncs to accounting automatically

### Vision (Phase 3)

- Expiration date tracking for fresh food operators
- Multi-driver performance analytics: compare driver efficiency, cash collected per stop, route completion time
- AI demand forecasting: predict par levels from day-of-week and seasonal consumption patterns; suggest SKU swaps for underperforming machines
- Location marketplace: two-sided platform connecting operators seeking placements with property managers
- Micro market support: extend platform to hybrid vending + micro market fleets
- White-label / franchise bundles: standardized software for vending franchise networks (3,000+ operators per network)
- International expansion: UK, Canada, Australia (same Cantaloupe/VendSoft gap; same operator demographics)

---

## User Journeys

### Journey 1: Marcus — The Growth-Stage Owner-Operator (Primary Success Path)

Marcus runs 45 machines on 3 routes in Atlanta. He uses VendSoft Pro ($49/month) with a printed Google Sheet pick list. Every Sunday evening he spends 45 minutes updating his spreadsheet for Monday's routes. Last month, his driver missed that a Doritos machine had been short for 11 days.

**Opening scene:** Marcus finds RouteVend via a Facebook group post comparing VendSoft alternatives. He signs up for a 14-day trial.

**Onboarding:** Marcus enters his 45 machines with addresses and location names (10 minutes). He sets up his SKU catalog — the 15 products his routes carry — and assigns par levels to each machine (15 minutes). He builds his first route: North Route, Tuesdays, assigned to driver James. He generates the first pre-route restocking list and sees an aggregated truck load summary — exactly what he would have printed manually. Total time: 28 minutes.

**First route:** Marcus shares the driver app link with James. James downloads it, logs in, and sees the North Route with 15 stops, each showing the address and what to load. James marks each machine serviced, enters the cash collected, and flags one machine as needing a repair (photo attached). The app works in the parking garage where his phone has no signal.

**After the route:** Marcus opens his dashboard and sees the cash reconciliation summary. Machine 7 shows a $12 discrepancy — less cash than expected. He marks it "noted" and moves on. The dashboard shows two machines approaching minimum par levels for Doritos before next Tuesday's route.

**Aha moment:** Marcus realizes the software told him about the Doritos shortage before it became a stockout. He calculates: his highest-traffic machine earns $28/day. He prevented a 3-day stockout. RouteVend paid for itself twice over this week.

**Long-term:** After 3 months, all route data is loaded. The par levels have self-corrected based on consumption patterns. Marcus's Sunday evenings are free. He cancels VendSoft.

**Journey reveals requirements for:** Route builder, par level management, restocking list generation, driver mobile app (offline), cash reconciliation log, machine dashboard, low-stock alerts.

---

### Journey 2: Diana — New Operator Scaling Up (Onboarding Edge Case)

Diana has 22 machines acquired over 18 months. She runs all routes herself and is planning to hire her first driver next quarter. She's currently tracking inventory by memory and phone photos of cash.

**Opening scene:** Diana watches a YouTube video from a vending creator mentioning RouteVend's AppSumo launch. She buys the LTD for $199.

**Setup challenge:** Diana has never used vending software before. She doesn't know what "par levels" means. She sets up her machines and SKUs, but gets stuck on par levels — she doesn't know the right numbers.

**Recovery path:** The onboarding tooltip explains: "Par level = how many units the machine should hold. Set it equal to the machine capacity. Set the minimum to 25% of capacity." Diana estimates from memory — she'll refine after her first route.

**First restocking list:** Diana runs her first solo route with the driver app. She discovers two machines she hadn't visited in 8 days are flagged as urgent on the dashboard (below minimum par). One of them — she checks — has been sold out of Red Bull for 5 days.

**Hiring transition:** When Diana hires her first driver, she adds him to her account as a driver role. He downloads the app. His first route is entirely self-contained in the app — no training call needed. Diana monitors his progress from the operator dashboard.

**Success signal:** Diana reports in an AppSumo review: "This replaced my clipboards and my panic. I handed my phone to my first driver and he knew exactly what to do."

**Journey reveals requirements for:** Driver role management, onboarding guidance/tooltips, issue flagging via mobile app, fleet urgency sort, machine monitoring between routes.

---

### Journey 3: Robert — Established Operator, Stack Consolidation (Secondary User: Large Fleet)

Robert runs 90 machines on 4 routes with 3 full-time drivers. He uses Vend-Trak (web-only, slow mobile UX) + QuickBooks + a shared Google Sheet. His drivers complain about the web interface weekly. Cash reconciliation is done in QuickBooks manually.

**Opening scene:** Robert sees a VendingConnection.com newsletter ad for RouteVend. He starts a trial.

**Evaluation:** Robert compares RouteVend to Vend-Trak. The key question: will his drivers actually use it? He runs a 2-week parallel test — one driver uses RouteVend, two continue with Vend-Trak. The RouteVend driver completes routes 15 minutes faster and submits zero "software complaints."

**Migration:** Robert imports his machine list via CSV. He sets up 4 routes, assigns drivers. Par levels take time — he estimates from historical memory for the first month, then lets the system refine.

**Cash reconciliation:** Robert no longer opens QuickBooks after routes. He reviews the RouteVend cash summary, exports a weekly CSV, and imports it to QuickBooks. He eliminates 2 hours/week of manual reconciliation.

**Ongoing:** Robert pays $149/month (unlimited machines). He notices RouteVend identifies 3 machines as underperforming — revenue per visit below fleet average. He relocates one. Sales from that location increase 40% at the new site.

**Journey reveals requirements for:** CSV machine import (or bulk add), multi-driver management, operator dashboard with fleet-level views, machine performance ranking, CSV export for accounting, underperforming location flag.

---

### Journey 4: James — The Route Driver (Mobile App Daily Use)

James is Marcus's driver. He is not technical and has no interest in software beyond what his boss tells him to use.

**Opening scene:** Marcus texts James a download link and says "This tells you what to bring and where to go." James downloads the app, creates his driver account, and sees one route assigned to him.

**Daily use:** James opens the app each morning. He sees "North Route — Tuesday — 15 stops." He taps the first stop, which opens his maps app. He drives there, marks the machine serviced, enters the cash he counted, enters what he actually restocked (slightly less than the list said — the machine was more full than expected). He taps one issue flag: "Coin mechanism jammed — photo attached."

**Signal dropout:** At Stop 7, James enters a parking garage with no signal. He marks the machine serviced and enters cash as normal — the app doesn't tell him there's no signal. When he returns to his truck and drives to Stop 8, the app syncs automatically.

**End of day:** James marks the route complete. Marcus receives a notification: "North Route complete — 15/15 stops — $847 cash collected."

**Journey reveals requirements for:** Driver role with limited app view (only their assigned routes), today's route list, turn-by-turn navigation handoff (open in maps), machine servicing workflow (cash + restocked quantities), issue flag with photo, offline queue, route completion status notification to operator.

---

### Journey 5: Marcus — Cash Discrepancy Investigation (Admin/Audit Path)

Marcus notices a recurring $15–$25 discrepancy on Machine 7 over three consecutive route runs. He suspects either the machine is miscounting, or there's a cash handling issue.

**Investigation:** Marcus opens Machine 7's cash history. He sees: Route run 1 (expected $127, reported $112, discrepancy $15), Route run 2 (expected $134, reported $109, discrepancy $25), Route run 3 (expected $119, reported $96, discrepancy $23). All three runs were completed by the same driver, James.

**Audit trail:** Each cash entry shows the driver, timestamp, and logged amount. Marcus can see James logged all three runs via mobile app within his normal route hours. The issue appears to be machine-side (overcounting estimated sales), not driver-related.

**Resolution:** Marcus adjusts the machine's estimated sales rate manually, correcting the par calculation for that machine. He marks all three discrepancies as "machine calibration issue — noted."

**Journey reveals requirements for:** Per-machine cash history with driver attribution, discrepancy status (open/noted/resolved), manual override for estimated sales rate, full audit trail with driver + timestamp per entry.

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|---|---|
| Route builder (named routes, stops, driver assignment, schedule) | Marcus J1, Robert J3 |
| Par level management per SKU per machine | Marcus J1, Diana J2 |
| Pre-route restocking list (auto-generated, aggregated) | Marcus J1 |
| Driver mobile app — route execution (offline-first) | Marcus J1, James J4 |
| Driver role management (limited view, route-scoped) | Diana J2, James J4 |
| Machine dashboard with fleet urgency sort | Marcus J1, Diana J2 |
| Cash reconciliation log (expected vs. actual per machine) | Marcus J1, Robert J3 |
| Cash audit trail with driver attribution and timestamp | Marcus J5 |
| Issue flagging with photo + note | James J4 |
| Offline queue with background sync | James J4 |
| Machine performance ranking (underperforming flag) | Robert J3 |
| Bulk machine import / CSV | Robert J3 |
| CSV export for accounting | Robert J3 |
| Operator notifications (route completion) | James J4 |
| Onboarding guidance / par level tooltips | Diana J2 |

---

## SaaS + Mobile Specific Requirements

### Project-Type Overview

RouteVend is a SaaS B2B product with a native mobile companion app. The SaaS web application serves operators (account management, route building, dashboards, reporting). The mobile app serves drivers (route execution). Both share a common backend API and PostgreSQL database.

Multi-tenancy is strict: each operator account is an isolated tenant. Drivers belong to a specific operator account and access only that account's routes and machines.

### Technical Architecture Considerations

**Multi-Tenancy Model:**
- Tenant isolation at database row level (operator_id foreign key on all tenant-scoped tables)
- Drivers are sub-users within an operator tenant; driver role restricts access to assigned routes only
- Operator-level billing tied to machine count tier (25 / 100 / unlimited)

**Offline-First Mobile Architecture:**
- SQLite local store on device; all driver actions written locally first
- Background sync to server API when connectivity available
- Conflict resolution strategy: last-write-wins for cash and quantity entries (driver entries are authoritative — server never auto-overwrites)
- Sync failure handling: retry queue with exponential backoff; user-visible sync status indicator

**Authentication Model:**
- Two user roles: Operator (full access within tenant), Driver (route-scoped read + action write)
- Drivers authenticate via mobile app only (no web dashboard access)
- Session tokens persisted on device for offline use; revocable by operator
- Auth provider: Clerk or Supabase Auth (avoid building from scratch)

**API Design:**
- RESTful JSON API consumed by both web dashboard and mobile app
- Mobile endpoints optimized for low-bandwidth: payload compression, delta sync (send only changed records since last sync timestamp)
- Rate limiting per tenant to prevent runaway sync loops

**Platform Support:**
- iOS 15+ and Android 11+ (covers 90%+ of target user devices)
- React Native single codebase for iOS and Android
- Distributed via Apple App Store and Google Play Store

### Permission Matrix

| Action | Operator | Driver |
|---|---|---|
| Create/edit machines | ✅ | ❌ |
| Create/edit routes | ✅ | ❌ |
| Set par levels | ✅ | ❌ |
| View all routes | ✅ | ❌ |
| View assigned routes | ✅ | ✅ |
| Execute route (log service, cash, restock) | ✅ | ✅ |
| Flag machine issues | ✅ | ✅ |
| View cash reconciliation | ✅ | ❌ |
| Export CSV | ✅ | ❌ |
| Manage drivers (add/remove) | ✅ | ❌ |
| Billing management | ✅ | ❌ |

### Implementation Considerations

**Cash reconciliation integrity:**
- Expected cash calculated from estimated sales (time since last service × machine's average daily revenue rate)
- Never auto-correct or force-match discrepancies — always display expected and actual as two separate editable fields
- Operator explicitly marks discrepancies as "noted" or "resolved"; system never auto-resolves

**Inventory estimation model (MVP):**
- No telemetry in MVP; inventory is estimated from last manual count + expected consumption since last service
- Expected consumption = (time since last service / average days between services) × par level quantity
- Displayed as estimated inventory level with explicit "last counted" date — never presented as exact

**Machine fleet heterogeneity:**
- Operators run mixed fleets (multiple machine brands, some with DEX, most without)
- MVP supports manual count workflow as first-class citizen; no assumptions about telemetry availability
- DEX/telemetry is Phase 2

---

## Functional Requirements

### Fleet & Machine Management

- FR1: Operators can add machines to their fleet with a name, street address, and optional location notes
- FR2: Operators can edit and deactivate machines without losing historical data
- FR3: Operators can import machines in bulk via CSV upload (name, address columns)
- FR4: Operators can define a product catalog of SKUs with name and package size

### Par Level Management

- FR5: Operators can set a target quantity (should-have) and minimum quantity (reorder trigger) per SKU per machine
- FR6: Operators can view all par levels for a machine on a single screen, showing current estimated inventory vs. target
- FR7: Operators can copy par level configurations from one machine to another machine of the same type
- FR8: Operators can update par levels at any time; changes take effect on the next restocking list generation

### Route Configuration

- FR9: Operators can create named routes with a recurring weekly schedule (e.g., every Tuesday)
- FR10: Operators can add machines to a route and reorder stops manually (drag to set sequence)
- FR11: Operators can assign one driver per route
- FR12: Operators can create multiple routes (up to machine count tier limit)
- FR13: Operators can view all routes with their next scheduled date and assigned driver

### Pre-Route Restocking List

- FR14: The system generates a pre-route restocking list automatically 24 hours before each scheduled route
- FR15: The restocking list shows, per machine stop: machine name, address, and a per-SKU list of units to bring (target quantity minus estimated current inventory)
- FR16: The restocking list shows an aggregated truck load summary: total units of each SKU to load across all stops on the route
- FR17: Operators can download the restocking list as a PDF or view it in the driver app
- FR18: Operators can manually trigger restocking list regeneration at any time before route start

### Driver Mobile App — Route Execution

- FR19: Drivers can view their assigned routes for today with machine stop order and addresses
- FR20: Drivers can tap a machine stop to open turn-by-turn navigation in the device's default maps app
- FR21: Drivers can mark a machine as serviced and log the cash amount collected (numeric entry)
- FR22: Drivers can log the actual units restocked per SKU at each machine stop
- FR23: Drivers can flag a machine issue with a photo and text note (repair needed, machine down, vandalism)
- FR24: All driver actions taken while offline are queued locally and sync automatically when connectivity is restored
- FR25: Drivers can see a sync status indicator showing whether outstanding entries are pending upload
- FR26: Drivers can mark an entire route as complete after servicing all stops

### Machine Dashboard & Alerts

- FR27: Operators can view a fleet dashboard showing all machines sorted by urgency (machines below minimum par level first)
- FR28: Operators can view per-machine detail: last serviced date, estimated current inventory per SKU, cash collected since last service, location name
- FR29: The system flags machines that have not been serviced within 150% of their scheduled service interval as overdue
- FR30: The system flags machines whose estimated revenue per visit is below the fleet average as underperforming location candidates
- FR31: Operators receive in-app notifications when a driver marks a route complete

### Cash Reconciliation

- FR32: After each route, operators can view a cash reconciliation summary showing expected vs. driver-reported cash collected per machine
- FR33: Each cash entry displays the driver name, timestamp, and logged amount
- FR34: Operators can mark a cash discrepancy as "noted" or add a resolution note; the system never auto-resolves discrepancies
- FR35: Operators can view the full cash history for any machine, filterable by date range
- FR36: Operators can export a cash reconciliation report for any date range as a CSV file

### Account & Driver Management

- FR37: Operators can invite drivers to their account via email; drivers receive a link to create a driver account and download the mobile app
- FR38: Operators can assign drivers to routes and remove driver assignments without deleting the driver account
- FR39: Operators can deactivate a driver account, immediately revoking mobile app access
- FR40: Operators can manage their subscription tier and billing information via a self-serve billing portal

---

## Non-Functional Requirements

### Performance

- The pre-route restocking list generates within 3 seconds for routes with up to 50 machine stops
- The driver mobile app's main route view loads within 2 seconds on a 4G connection and within 500ms when data is cached locally
- All driver actions (log cash, mark serviced, flag issue) complete the local write within 200ms, regardless of connectivity, providing immediate UI feedback
- The operator dashboard (fleet view) loads within 3 seconds for fleets of up to 150 machines
- Background sync of queued offline entries completes within 30 seconds of connectivity being restored, measured for queues of up to 200 pending actions

### Security

- All data transmitted between app/web and the API is encrypted via TLS 1.2+
- All data at rest (database, backups) is encrypted using AES-256
- Strict multi-tenant isolation: all database queries are scoped by operator_id; no cross-tenant data access is possible at the API layer
- Driver session tokens are scoped to the driver's assigned operator tenant and cannot be used to access other tenants
- Cash reconciliation entries are immutable once submitted — only a "note" field can be appended; no deletion or edit of the original logged amount
- Operator billing credentials are managed by Stripe; no raw payment card data is stored or processed by RouteVend servers
- Driver accounts can be remotely deactivated by operators, immediately invalidating active sessions on the mobile device

### Reliability

- The driver mobile app functions fully without internet connectivity: operators can execute a complete route (view stops, log cash, log restocked quantities, flag issues) with no network access
- The offline queue durably persists app actions across app restarts and device reboots using local SQLite storage — no action is lost due to app crash or OS kill
- The backend API targets 99.5% monthly uptime during the first year (startup-appropriate SLA; scale to 99.9% at 500+ accounts)
- Zero cash entry data loss tolerance: cash reconciliation entries that transit through the offline queue must arrive at the server with complete accuracy — partial writes and corruption are detected and flagged for operator review, never silently discarded

### Scalability

- The system supports operator accounts with up to 150 machines and up to 10 active drivers per account without degradation in restocking list generation time or dashboard load time
- The backend is horizontally scalable to support up to 500 operator accounts without architectural changes (expected Month 12 ceiling: ~300 accounts)
- Onboarding a new operator account (machine import, route setup, first restocking list) does not degrade performance for other active operator tenants

### Integration

- Cash reconciliation data exports as CSV compatible with QuickBooks import format (columns: date, machine name, location, cash amount, driver name, discrepancy amount)
- Restocking lists export as PDF with operator name, route name, date, machine stops, per-SKU quantities, and aggregated truck load summary
- Driver app navigation handoff uses the device's default maps application via deep link (Apple Maps, Google Maps, or Waze depending on user preference)
- Stripe integration handles subscription billing (monthly and annual) and LTD one-time payments; webhook events update account tier status within 60 seconds of payment

---

## Appendix: Out of Scope (MVP)

The following capabilities are validated wants but explicitly excluded from MVP to achieve a 4–6 week build timeline:

| Capability | Reason for Deferral | Target Phase |
|---|---|---|
| DEX/IoT telemetry (Nayax, Cantaloupe, Crane) | Per-vendor integration work; manual counts are the correct MVP default | Phase 2 |
| Warehouse inventory module | Truck loading list is the MVP; warehouse tracking adds complexity | Phase 2 |
| Commission tracking | Needed by established operators, not core ICP for MVP launch | Phase 2 |
| GPS route auto-optimization | Operators have existing route muscle memory; manual reordering is sufficient | Phase 2 |
| QuickBooks direct API integration | CSV export covers immediate need | Phase 2 |
| Expiration date tracking | Fresh food operators only; snack/beverage majority doesn't need it | Phase 2 |
| Micro market support | Different product category; dilutes focus before vending is established | Phase 3 |
| Multi-tenant / franchise management | Relevant at 500+ operators; not an MVP concern | Phase 3 |
| AI demand forecasting | Requires 6+ months of historical data to be useful | Phase 3 |

---

*PRD generated: 2026-10-22 | RouteVend — Vending Machine Route & Inventory Management*
*Based on: market research, product brief, shortlisted idea (Score: 90/105)*
*Next step: create-architecture*
