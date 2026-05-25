---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/wordpress-multisite-manager.md
  - _bmad-output/planning-artifacts/market-research-wordpress-multisite-manager.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: developer_tools
  complexity: low
  projectContext: greenfield
date: '2026-05-25'
author: Root
project_name: WordPress Multi-Site Manager
---

# Product Requirements Document - WordPress Multi-Site Manager

**Author:** Root
**Date:** 2026-05-25

## Executive Summary

Over 1.5 million WordPress freelancers and small agencies worldwide manage 5–25 client sites each, spending 4–8 hours per week on repetitive maintenance — manual logins, plugin update checks, backup verification, and uptime monitoring done site-by-site. The dominant solution, ManageWP (GoDaddy), charges up to $300/month for 25 sites with a complex dashboard that was designed for 500-site hosting companies. Self-hosted alternatives (MainWP, InfiniteWP) require server administration expertise that disqualifies most non-developer freelancers. WP Umbrella, the only credible hosted alternative, charges per-site (~$55/month for 25 sites) with no lifetime payment option — leaving the most price-sensitive segment of the market unserved.

WordPress Multi-Site Manager is a hosted SaaS dashboard that lets freelancers and small agencies manage 5–25 client WordPress sites from a single, deliberately simple interface. The product centers on one hero feature no competitor has made the centerpiece of its UX: **staging rollback on bulk updates** — the ability to update all plugins and themes across every client site and instantly roll back any site to its pre-update state if something breaks. This eliminates the #1 emotional pain point in WordPress maintenance: the anxiety of "what if this update breaks a client's site?"

The go-to-market is an AppSumo Lifetime Deal launch — a channel no current WordPress management SaaS uses, despite WordPress tools being among AppSumo's highest-performing categories. Flat-tier pricing ($19–39/month or $59–99 LTD) removes per-site math anxiety and the monthly-cost objection simultaneously.

**Target users:** Solo WordPress freelancers managing 8–18 client maintenance retainers, and small web agencies (2–5 people) managing 20–50 sites with a recurring maintenance revenue stream. Both segments are actively migrating away from ManageWP due to GoDaddy's acquisition and eroding support quality.

**Revenue path:** 1,000–2,000 AppSumo LTD buyers in the first 30 days ($60K–$160K net); $10K MRR by Month 12 from monthly/annual subscriptions and LTD premium add-ons.

### What Makes This Special

**Staging rollback as the product's entire identity — not a $9/month add-on.** ManageWP calls it "Safe Updates" and charges extra. WP Umbrella has visual regression but buries it. This product's entire value proposition, onboarding flow, and marketing narrative is built around one idea: *update all 25 of your clients' WordPress sites without fear*. Every other feature exists to support that promise.

**First AppSumo Lifetime Deal in the WordPress site management category.** No current competitor offers a one-time payment option. WordPress freelancers are intensely cost-sensitive and AppSumo-native in their purchasing behavior — they actively search AppSumo for tools in their workflow. Being first in this channel is a structural distribution advantage, not just a pricing tactic.

**Flat-tier pricing that eliminates per-site math.** At $29/month for up to 25 sites, adding the 11th or 21st site costs $0 extra. The psychological simplicity of "one price, up to 25 sites" versus per-site models is a real conversion advantage. Freelancers hate recalculating their tool bill every time they add a client.

**Deliberate simplicity against ManageWP's feature bloat.** ManageWP has 20+ add-ons and a dashboard that takes hours to configure. This product does five things: site overview, updates, backups, uptime, and security status. No add-on store. No configuration rabbit holes. A WordPress freelancer should be able to connect their first three sites and run their first bulk update within 30 minutes of signing up.

**Independence from big-company ownership.** GoDaddy's acquisition of ManageWP is an active, ongoing trust deficit. WordPress community forums contain hundreds of threads from former ManageWP loyalists who switched after acquisition. Founder-led, independent positioning is a genuine differentiator with this audience.

## Project Classification

- **Project Type:** SaaS B2B — hosted web application with a companion WordPress plugin distributed via WordPress.org
- **Domain:** Developer Tools / WordPress Ecosystem
- **Complexity:** Low — standard CRUD, scheduling, webhook-based site monitoring, cloud storage integration. No regulated data, no complex domain compliance requirements.
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Onboarding speed:** 80%+ of new signups successfully connect their first 3 sites and run at least one update check within 30 minutes of account creation
- **Bulk update adoption:** 60%+ of paid accounts run at least one bulk update operation within their first 30 days
- **Rollback trust signal:** 10–15% of accounts use the rollback feature within 90 days — confirms the feature works and users trust it enough to act rather than fear it
- **Weekly active usage:** 70%+ of paid accounts log in at least once per week (maintenance cadence is weekly)
- **Portfolio growth:** Average account grows from initial 5 connected sites to 12+ within 90 days
- **Backup coverage:** 80%+ of managed sites have active automated backup schedules configured within 30 days of connecting
- **Uptime alert response:** Median < 15 minutes from alert sent to user-acknowledged-in-dashboard
- **Update success rate:** 85%+ of bulk update operations complete without any site needing rollback (the other 15% generating rollback events is a positive signal, not a failure metric)

### Business Success

- **AppSumo launch (Month 0–3):** 1,000 LTD units sold (conservative), 2,000 (target); 4.5+ star average on AppSumo deal page; < 5% refund rate through 60-day money-back window
- **Net launch revenue:** $55,000–$135,000 from LTD buyers
- **Community validation (Month 3–6):** 3+ organic posts on r/Wordpress or WP Tavern referencing the product positively without promotion; NPS > 40 among active users
- **MRR foundation (Month 6–12):** $5,000 MRR by Month 6; $10,000 MRR by Month 12; 200+ active monthly/annual subscribers (non-LTD)
- **LTD-to-MRR conversion:** 15–25% of LTD buyers upgrading to premium add-ons (white-label reports, team access) within 12 months

### Technical Success

- **Dashboard responsiveness:** All dashboard views load within 2 seconds; update logs stream in real time without page refresh
- **Plugin reliability:** Connector plugin installs and activates without conflict on 99%+ of standard WordPress hosting configurations (shared hosting, managed hosting, WP Engine, Kinsta, Flywheel)
- **Update operation reliability:** 99.5%+ of bulk update operations complete without system errors; failures surface clear error messages with retry options
- **Backup delivery:** 99%+ of scheduled backups deliver to user-provided storage successfully; failures trigger email alert within 30 minutes
- **Uptime check accuracy:** < 0.1% false positive rate on downtime alerts (alert only fires when the site is genuinely down, not when the monitoring request times out once)
- **Infrastructure cost per account:** < $8/month (user-supplied backup storage keeps bandwidth costs low)

### Measurable Outcomes

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| LTD buyers | 500 | 1,000+ | — | — |
| Active paid accounts | 300 | 800 | 1,200 | 2,000+ |
| Monthly/Annual subscribers | 0 | 50 | 200 | 500+ |
| MRR | $0 | $1,000 | $5,000 | $10,000+ |
| Sites under management | 2,000 | 8,000 | 15,000 | 30,000+ |
| NPS | — | 35+ | 40+ | 45+ |
| AppSumo rating | 4.5+ | 4.5+ | — | — |

## Product Scope

### MVP - Minimum Viable Product

The MVP delivers five capabilities and nothing else. Each feature directly addresses one of two pain points: maintenance time burden or update anxiety. No feature is gated behind a premium tier at launch — every paid account gets the full product.

**Feature 1: Central Dashboard**
Single-screen overview of all managed sites. Per-site status columns: WordPress core version, number of plugins/themes with pending updates, last backup timestamp, uptime status (up/down/degraded), and last security check result. Color-coded urgency indicators (green/yellow/red) for instant scanning. No sub-navigation required — every site's health is visible at a glance.

**Feature 2: WordPress Connector Plugin**
Lightweight plugin installed on each client site (distributed via WordPress.org). Establishes encrypted API connection to the dashboard. Reports update inventory, site health signals, and uptime pings. Generates a pre-authenticated one-click install link from the dashboard — site owners paste a URL or use a dashboard-generated install link, no manual plugin search required.

**Feature 3: Bulk Updates with Staging Rollback (Hero Feature)**
- Select all or a subset of connected sites for bulk plugin/theme/core updates
- Pre-update snapshot (database + files) created automatically before any update executes
- Real-time update log: success/failure per site, per plugin, displayed as updates run
- One-click rollback: restore any site to its pre-update snapshot from the dashboard, within 60 seconds
- Version diff view: show plugin version numbers before and after each update
- Scheduled updates: run updates at low-traffic times (user sets time + timezone per site)
- Selective updates: choose specific plugins/themes to update vs. update all

**Feature 4: Automated Backups (Bring Your Own Storage)**
- Scheduled daily or weekly full-site backups (files + database)
- Supports: Amazon S3 (and S3-compatible), Dropbox, Google Drive
- User provides cloud storage credentials; the product orchestrates backup delivery
- Backup log: last successful backup timestamp, archive size, destination
- One-click manual backup trigger available at any time
- Backup download: generate a time-limited download URL to retrieve the backup archive manually
- Email alert when a scheduled backup fails

**Feature 5: Uptime Monitoring + Alerts**
- HTTP uptime check every 5 minutes per site
- Email alert on downtime detection (within 10 minutes of outage start)
- 30-day uptime history: percentage uptime per site
- Response time tracking: flag sites with consistently slow response times (> 3 seconds)
- Alert throttling: no more than 1 alert per 30 minutes per site (prevents spam during brief outages)

### Growth Features (Post-MVP)

To be built after AppSumo launch validates product-market fit (contingent on 1,000+ LTD buyers and NPS > 40 at Month 3):

- **White-label monthly maintenance reports** — auto-generated PDF/email reports per client site, sent on a schedule, with agency branding. The #1 agency feature request.
- **Automated backup restore from dashboard** — one-click restore directly from the backup archive; MVP requires manual download and re-upload.
- **Plugin vulnerability scanning** — integration with WPScan API to flag known-vulnerable plugin versions across the portfolio.
- **SMS/Slack/webhook alerts** — additional alert channels for uptime and update events beyond email.
- **Team member access** — role-based permissions: admin, site manager, read-only. Required for agencies with developer employees.
- **Client read-only portal** — a URL shareable with clients showing their site's uptime status, last backup, and last update date.

### Vision (Future)

Post $10K MRR, post-Phase 2 validation:

- Visual regression testing: automated screenshot comparison before/after plugin updates to catch layout breaks
- WooCommerce update safety: validate cart and checkout health before and after update operations
- AI-powered update risk scoring: flag plugin versions with high community-reported conflict rates based on aggregated data across all accounts
- Bulk site provisioning from template: one-click deploy a new WordPress install from a saved configuration template
- API/Zapier integration: trigger actions from external workflows
- Geographic expansion and multi-language support (Spanish for Latin American WordPress agency market)

## User Journeys

### Journey 1: Alex the Solo Freelancer — Update Day Transformation

**Opening Scene:** Alex is a 32-year-old solo WordPress developer who manages 18 client sites on monthly maintenance retainers ($75–150/month each). Every Tuesday is "maintenance day." He logs into each site one by one, checks for plugin updates, and runs backups to Dropbox manually. For 18 sites, this takes most of his Tuesday. Three months ago, a WooCommerce update crashed his biggest client's checkout for four hours before Alex noticed. The client nearly fired him. Since then, Alex delays plugin updates 2–3 weeks after release — which means his entire portfolio runs outdated, vulnerable plugins as a routine state.

**Rising Action:** Alex sees a Reddit post in r/Wordpress: "Switched from ManageWP to [product] — $79 LTD on AppSumo, staging rollback built in, way simpler dashboard." He clicks through, reads the AppSumo page, notes the 60-day money-back guarantee, and buys. Total time to purchase: 8 minutes.

He signs up, opens the dashboard, and uses the guided setup to install the connector plugin on his first three client sites using the one-click install link. Each site connects in under 2 minutes. He runs his first update check — the dashboard shows 23 plugins with pending updates across those 3 sites, color-coded by urgency. He selects all 3 sites, clicks "Run Bulk Update," and watches the real-time log as updates apply site-by-site. One plugin — a caching plugin — fails on one site. The dashboard flags it red and shows a "Roll Back This Site" button. Alex clicks it. 45 seconds later, the site is restored to its pre-update state. He checks it in a browser: clean. No client noticed anything.

**Climax:** That same Tuesday, Alex connects his remaining 15 sites and runs the full portfolio update sweep. Two plugins flag conflicts; both roll back cleanly. Alex's 18-site maintenance sweep takes 45 minutes, down from a full day. He connects Dropbox for automated backups on all sites. He schedules weekly updates to run at 3 AM on Tuesday nights going forward.

**Resolution:** Alex's maintenance retainers are now pure margin. He adds 4 new clients in the following month — something he was reluctant to do when each new site meant more Tuesday misery. He refers 3 colleagues via the referral program and writes an AppSumo review: "This is what ManageWP should have been five years ago."

**Journey Requirements:** Site connection flow, dashboard portfolio view, bulk update selection, real-time update log, conflict detection, one-click rollback, automated backup scheduling, update scheduling.

---

### Journey 2: Sarah's Agency — Switching from ManageWP

**Opening Scene:** Sarah runs a 3-person web agency managing 35 client WordPress sites. Maintenance plans are the agency's most reliable revenue stream. They use ManageWP, but after GoDaddy's acquisition, support response times have tripled and the dashboard has gotten slower. Their monthly ManageWP bill for 35 sites with backups and safe updates enabled: $280/month. Her developer, Marco, says the dashboard "looks like it was built for a 1,000-site hosting company."

**Rising Action:** Marco finds a WP Tavern article comparing management tools after the ManageWP acquisition. He runs a trial side-by-side. Within 30 minutes he's connected 10 agency sites and run a bulk update sweep on the new tool. He comes to Sarah: "I migrated 10 sites in half an hour and it cost me nothing. We should switch."

Sarah starts the 14-day free trial on the Agency plan. Marco migrates the full portfolio in three sessions. He validates backup reliability by downloading a backup archive and restoring it to a staging server — it works cleanly. The team confirms the dashboard is faster and the bulk update workflow is intuitive enough that their new junior developer figured it out without training.

**Climax:** Sarah cancels ManageWP. The Agency plan is $39/month — a $241/month saving. Marco completes weekly maintenance sweeps in 30-minute windows instead of 3-hour sessions. When an update creates a visual issue on a client's WooCommerce store, Marco rolls it back from the dashboard before the client reports anything. Client never knows.

**Resolution:** Sarah's maintenance plan margins improve from 35% to 60%. With the time savings, the agency takes on 8 new maintenance clients without adding staff. Sarah generates the first white-label reports (Phase 2 feature) for her top 10 clients — they are the first clients to respond to a maintenance report with "this is great, keep doing this."

**Journey Requirements:** Multi-account dashboard, bulk site migration from another tool (import by plugin connection), team member sharing single account across connected sites, fast portfolio update sweeps, rollback capability, agency-plan billing.

---

### Journey 3: New Site Owner Breaking During Update — Recovery Path

**Opening Scene:** Mark is a solo WordPress consultant who just added his 8th client site to the dashboard. He runs his first bulk update across all 8 sites on a Sunday evening. Seven updates complete cleanly. On site #8 — a small WooCommerce store — the update log shows "Update failed: Fatal PHP error after update. Rolling back automatically." The dashboard has already initiated an automatic rollback without Mark doing anything.

**Rising Action:** Mark sees the rollback complete in 90 seconds. The site is back online. The dashboard shows exactly which plugin caused the failure (WooCommerce 9.x conflicting with an outdated theme). Mark clicks "View Site" and confirms the storefront is loading cleanly. He marks that plugin as "skip on next update" for that site and schedules a manual update for later after he checks the plugin's changelog.

**Resolution:** The client's store had 47 seconds of downtime (during the failed update attempt) before the rollback restored it. The client never noticed. Mark adds a note to his maintenance log. He didn't receive a panicked call on a Sunday evening. This is the moment Mark decides to grow his maintenance retainer list aggressively.

**Journey Requirements:** Automatic rollback on update failure (no user action required), clear failure diagnosis (which plugin, which error), per-site per-plugin "skip on next update" setting, post-rollback site health confirmation.

---

### Journey 4: Admin/Operations — Infrastructure Scaling

**Opening Scene:** As accounts grow to 500+, the infrastructure team monitors system health. A batch of overnight scheduled updates is running across 4,000+ connected sites simultaneously.

**Rising Action:** The job queue processes updates in parallel across sharded worker pools. The monitoring dashboard shows job throughput, failure rate, and queue depth in real time. One worker pool develops elevated failure rates due to a hosting provider returning intermittent 429 errors. The system automatically retries with exponential backoff rather than marking updates as failed.

**Resolution:** The infrastructure dashboard surfaces the anomaly. A configuration change throttles the rate of concurrent connections to that specific hosting provider range. The retry queue clears within 20 minutes. Users see their update logs complete — some with a slight delay, none with unexplained failures. The operations team has a clear audit trail for the incident.

**Journey Requirements:** Admin monitoring dashboard (internal), job queue visibility, worker pool health metrics, rate limiting configuration per hosting provider, retry queue management, per-run audit logs accessible by support staff.

## Innovation & Novel Patterns

### Detected Innovation Areas

**Business Model Innovation: First LTD in a SaaS Category**
The primary innovation is not technical — it is the application of a Lifetime Deal (AppSumo) distribution model to a category where no current competitor has used it. WordPress tools have the highest LTD attachment rate of any AppSumo category (iThemes, WPForms, Thrive Suite, WP Rocket all achieved LTD success). Yet every current WordPress site management SaaS charges monthly. The innovation is recognizing this gap as a first-mover distribution opportunity.

**UX Innovation: Hero Feature as Core Product Identity (Not Upsell)**
Competitors treat rollback as a premium feature. This product is designed so that the rollback capability is introduced in onboarding step 2 — before the user has even run a real update. The first time a user runs a bulk update, the UI shows the rollback button prominently even if no rollback is needed. The product educates users into confidence. This is a UX strategy, not just a feature set.

**Data Network Effect: Update Safety Intelligence**
At scale, aggregated data across all connected sites creates a proprietary dataset: which plugin update versions caused rollbacks across the user base, which hosting providers have compatibility issues with specific plugins, which update pairs are likely to conflict. This data — unavailable to self-hosted tools or low-volume competitors — becomes an unfair advantage for improving the AI-powered risk scoring feature in Phase 3.

### Validation Approach

- AppSumo launch volume and refund rate validate the LTD business model
- Rollback usage rate (10–15% target) validates that users encounter real update failures and trust the tool to handle them
- NPS > 40 and < 5% refund rate validate that the simplified UX is genuinely better, not just cheaper
- r/Wordpress organic brand mentions validate community authenticity

### Risk Mitigation

- **LTD economics risk:** Infrastructure costs must stay < $8/account/month for LTD to be profitable long-term. Mitigated by user-supplied storage (no backup bandwidth cost) and efficient job queue architecture.
- **Competitor response risk:** ManageWP or WP Umbrella could launch their own LTD promotion. Mitigated by community-first brand building and AppSumo exclusivity window.
- **Plugin compatibility risk:** The connector plugin must work on all major WordPress hosting configurations. Mitigated by extensive pre-launch testing on WP Engine, Kinsta, Flywheel, Bluehost, SiteGround, and DreamHost.

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each user account is a tenant. Sites are owned by the account that connected them. There is no shared site visibility across accounts. Account data is logically separated at the data layer; no multi-account visibility is exposed in the MVP.

### Permission Structure (MVP)

Single-user accounts only in MVP. One login per account. Team member access (admin, site manager, read-only roles) is a Phase 2 feature explicitly out of MVP scope.

### Subscription & Billing

- Plans: Starter (up to 10 sites), Pro (up to 25 sites), Agency (up to 50 sites), Enterprise (unlimited)
- Billing: monthly or annual (20% discount) via Stripe
- LTD: AppSumo-exclusive during launch window; corresponds to Starter ($59), Pro ($79), Agency ($99) capacity tiers
- Plan upgrades: immediate; downgrades: effective at next billing cycle
- Overage handling: when site count exceeds plan limit, dashboard prompts upgrade — no automatic charges, no service interruption for existing connected sites

### Connector Plugin Architecture

- Distributed via WordPress.org plugin directory (required for trust and discoverability)
- Communicates with the SaaS backend via authenticated REST API (rotating API key per site)
- Minimum WordPress version support: 5.0+
- Minimum PHP version support: 7.4+
- Plugin must pass WordPress.org plugin review guidelines
- Plugin footprint: < 50KB, no admin UI on the client site (dashboard-only management)
- Plugin must not conflict with major WordPress security plugins (Wordfence, Sucuri, iThemes Security)

### Technical Architecture Considerations

**Backup Orchestration:** The SaaS backend orchestrates backup jobs by instructing the connector plugin to generate a backup archive and push it directly to the user's cloud storage credentials. Backup files never transit through the SaaS infrastructure — this eliminates significant bandwidth and storage costs and is a key unit economics driver.

**Update Job Queue:** Bulk updates across many sites run via an async job queue (not synchronous HTTP). Users see real-time progress via WebSocket or server-sent events. The queue handles retry logic, per-hosting-provider rate limiting, and failure isolation (one site's failure does not block the queue).

**Snapshot/Rollback:** Pre-update snapshots are stored in the user's own storage destination (same S3/Dropbox/GDrive as backups) — not on the SaaS infrastructure. The connector plugin creates the snapshot; the SaaS backend tracks the snapshot manifest and can instruct the plugin to restore from it on rollback.

**Uptime Monitoring:** Distributed HTTP checks from multiple geographic locations (reduces false positives from regional network issues). Alert fires only when 2+ check locations confirm the site is down.

### Integration Requirements

- **Cloud Storage:** Amazon S3 (and S3-compatible: Wasabi, Backblaze B2), Dropbox API, Google Drive API
- **Email:** Transactional email for alerts and account notifications (SendGrid or Postmark)
- **Payments:** Stripe for subscription billing
- **WordPress.org:** Plugin directory listing and update delivery for the connector plugin

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — the AppSumo LTD launch is the MVP validation gate. The product must be polished enough to earn 4.5+ stars on a public marketplace with a 60-day money-back guarantee. This sets a higher quality bar than a typical private beta — every core feature must work reliably on day one.

**Resource Requirements:** 1 backend developer, 1 frontend developer, 1 WordPress plugin developer (can be same as backend), optional designer for dashboard UX. 8–12 week build timeline for MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo freelancer connecting 5–25 sites and running weekly bulk update sweeps
- Agency team running portfolio sweeps across 25–50 sites
- Any user receiving and responding to uptime alerts
- Any user recovering from a failed update via rollback

**Must-Have Capabilities:**
1. Account creation and Stripe billing (monthly/annual plans + LTD code redemption)
2. WordPress connector plugin (WordPress.org submission, one-click install link from dashboard)
3. Site dashboard — portfolio view with per-site health status
4. Bulk update selection and execution with real-time log
5. Pre-update snapshot creation (stored in user's cloud storage)
6. One-click rollback from dashboard
7. Update scheduling (set time + timezone per site)
8. Automated backups (S3, Dropbox, Google Drive) with schedule configuration
9. Manual backup trigger and download link generation
10. Uptime monitoring (5-minute checks, email alerts, 30-day history)
11. Email notifications for: downtime, backup failure, update completion summary

### Post-MVP Features

**Phase 2 (Months 3–9, post-AppSumo validation):**
- White-label maintenance reports (PDF/email, agency-branded)
- Automated backup restore (one-click restore from dashboard, not just download)
- WPScan vulnerability scanning integration
- SMS/Slack/webhook alert channels
- Team member access with role-based permissions
- Client read-only portal (uptime + backup + update status)
- Per-plugin update risk scoring (based on aggregated rollback data)

**Phase 3 (Months 9–18, post-$10K MRR):**
- Visual regression testing (screenshot comparison pre/post update)
- WooCommerce-specific update safety checks
- Bulk site provisioning from template
- API and Zapier integration
- AI-powered update risk scoring

### Risk Mitigation Strategy

**Technical Risks:** Connector plugin compatibility across hosting environments is the highest-risk item. Mitigation: pre-launch compatibility testing on the 8 most common WordPress hosting configurations; modular plugin architecture that degrades gracefully when specific hosting restrictions apply (e.g., external HTTP calls blocked on shared hosting).

**Market Risks:** ManageWP or WP Umbrella launches a competing LTD. Mitigation: AppSumo launch window exclusivity; community-first positioning that creates brand loyalty before competitors respond; AppSumo algorithmic advantages for well-reviewed deals create compounding discoverability.

**Resource Risks:** If build timeline extends, cut features in this priority order: (1) update scheduling → manual-only updates are still valuable; (2) Google Drive support → launch with S3 + Dropbox only; (3) 30-day uptime history → launch with current status only.

## Functional Requirements

### Site Management & Dashboard

- FR1: Users can connect a WordPress site to their dashboard by installing the connector plugin via a one-click install link generated from the dashboard
- FR2: Users can view all connected sites in a single portfolio overview showing each site's update status, last backup time, uptime status, and last security check result
- FR3: Users can remove a site from their dashboard (connector plugin remains installed; site data is purged from the account)
- FR4: Users can assign a custom label or note to each connected site (e.g., "Client: Acme Corp — live site")
- FR5: Users can search and filter their site list by status (e.g., "show only sites with pending updates" or "show only sites that are down")
- FR6: Users can view a detail page for each connected site showing full update history, backup history, and uptime log

### Bulk Updates & Rollback

- FR7: Users can select all connected sites or a custom subset for a bulk update operation
- FR8: Users can choose to update all available plugins/themes/core or select specific items for update
- FR9: Users can initiate a bulk update and watch a real-time log showing each site's update progress as it happens
- FR10: The system automatically creates a pre-update snapshot (files + database) of each site before applying any updates
- FR11: Users can roll back any site to its pre-update snapshot with a single action from the update results view
- FR12: The system automatically rolls back a site if a fatal PHP error is detected immediately after an update, without requiring user action
- FR13: Users can view a version diff showing what version each plugin was before and after each update operation
- FR14: Users can mark specific plugins on specific sites as "skip on next update" to exclude them from future bulk operations
- FR15: Users can schedule bulk updates to run at a specified time and timezone per site
- FR16: Users receive an email summary after each bulk update run showing results across all sites (succeeded, failed, rolled back)

### Backup Management

- FR17: Users can configure automated backup schedules (daily or weekly) per connected site
- FR18: Users can connect cloud storage destinations (Amazon S3, S3-compatible, Dropbox, Google Drive) to their account for backup delivery
- FR19: The system delivers backup archives directly from the connected WordPress site to the user's cloud storage without routing through the SaaS infrastructure
- FR20: Users can trigger a manual backup of any connected site at any time
- FR21: Users can view a backup history log per site showing timestamp, archive size, and storage destination
- FR22: Users can generate a time-limited download URL to retrieve a backup archive from their cloud storage via the dashboard
- FR23: Users receive an email alert when a scheduled backup fails

### Uptime Monitoring & Alerts

- FR24: The system checks each connected site's HTTP availability every 5 minutes from multiple geographic locations
- FR25: Users receive an email alert when a site is confirmed down (2+ check locations confirm downtime before alerting)
- FR26: Users receive an email alert when a previously downed site recovers
- FR27: Users can view a 30-day uptime percentage history per connected site
- FR28: Users can view a response time trend per connected site and see which sites are consistently slow (> 3 second response)
- FR29: Alert throttling prevents more than one downtime alert per site per 30-minute window

### Account & Billing Management

- FR30: Users can create an account with email and password authentication
- FR31: Users can subscribe to a paid plan (Starter, Pro, Agency, Enterprise) with monthly or annual billing via Stripe
- FR32: Users can redeem an AppSumo LTD code to activate lifetime access at the corresponding capacity tier
- FR33: Users can upgrade their plan immediately; downgrades take effect at the next billing cycle
- FR34: Users can view their current plan, site count vs. plan limit, next billing date, and billing history
- FR35: The system blocks adding new sites when the account has reached its plan's site limit and prompts an upgrade
- FR36: Users can update their payment method and billing email
- FR37: Users can cancel their subscription; access continues through the paid period

### Notifications & Settings

- FR38: Users can configure which alert types they receive via email (downtime, backup failure, update summary)
- FR39: Users can configure their dashboard timezone for scheduling and time display
- FR40: Users can view a global activity log showing all actions taken across their account (updates run, backups created, alerts sent) with timestamps

## Non-Functional Requirements

### Performance

- Dashboard portfolio view loads within 2 seconds for accounts with up to 50 connected sites
- Real-time update log events appear within 1 second of the event occurring on the remote site
- Uptime check results are reflected in the dashboard within 10 minutes of each check cycle
- Bulk update job queue handles 5,000+ concurrent site update operations without degradation; individual account update operations are never delayed by other accounts' operations
- Backup archive generation on large sites (10GB+) must not cause visible site performance degradation for end visitors

### Security

- All communication between the connector plugin and the SaaS backend uses TLS 1.2+
- API keys used by the connector plugin are rotated on demand (user-triggered or on suspected compromise)
- Cloud storage credentials (S3 keys, OAuth tokens) are encrypted at rest using AES-256
- User passwords are stored as bcrypt hashes (cost factor ≥ 12)
- Backup archives and snapshots are stored in the user's own cloud storage — the SaaS platform never has persistent access to backup content after delivery
- Rate limiting on the API prevents brute force against site connector endpoints
- The connector plugin requests only the minimum WordPress permissions required for its operations

### Reliability

- SaaS backend: 99.9% monthly uptime (< 8.7 hours downtime/year) for dashboard and update/backup orchestration
- Uptime monitoring checks: designed to run independently of the main application; check infrastructure must be resilient to primary application failures
- Async job queue: jobs persist through application restarts; no update or backup job is silently dropped on infrastructure failure
- Failed backup jobs retry up to 3 times with exponential backoff before triggering a failure alert

### Integration

- Connector plugin must be compatible with WordPress 5.0+ and PHP 7.4+
- Connector plugin must not conflict with the 20 most-installed WordPress security and performance plugins (Wordfence, WP Rocket, W3 Total Cache, Sucuri Security, iThemes Security, etc.) — validated pre-launch
- Cloud storage integrations must support OAuth 2.0 for Dropbox and Google Drive; IAM key-based auth for S3
- Stripe integration must support subscription creation, upgrade, downgrade, cancellation, and LTD code redemption (one-time charge or $0 plan activation)
- Transactional email delivery SLA: alert emails delivered within 5 minutes of trigger event

### Scalability

- Architecture must support 10,000+ connected sites per account tier without redesign (enterprise use case)
- Job queue infrastructure must horizontally scale to support 50,000+ connected sites total across all accounts at MVP launch target volumes
- Database schema must support addition of team member access and client portals in Phase 2 without breaking changes to existing account data structures
