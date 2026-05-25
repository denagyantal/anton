---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/wordpress-multisite-manager.md
  - _bmad-output/planning-artifacts/market-research-wordpress-multisite-manager.md
workflowType: product-brief
lastStep: 5
project_name: wordpress-multisite-manager
user_name: Root
date: 2026-05-25
---

# Product Brief: WordPress Multi-Site Manager (5–25 Sites)

---

## Executive Summary

WordPress Multi-Site Manager is a hosted SaaS dashboard that lets freelancers and small web agencies manage 5–25 client WordPress sites from a single, simple interface — with one-click bulk updates and guaranteed staging rollback at its core.

The problem is real and validated: over 1.5 million WordPress freelancers and small agencies worldwide face an escalating maintenance burden as their client portfolios grow. The dominant solution, ManageWP (owned by GoDaddy), charges up to $300/month for 25 sites on a full-feature plan and has eroded user trust since its acquisition. Self-hosted alternatives (MainWP, InfiniteWP) require server expertise that most freelancers lack. The only credible hosted alternative, WP Umbrella, is priced per-site at ~$55/month for 25 sites and offers no one-time payment option.

WordPress Multi-Site Manager enters this gap with a deliberately simple hosted dashboard, flat-tier pricing ($19–39/month or $59–79 LTD), and a single hero feature that no competitor has made the centerpiece of its UX: **staging rollback on bulk updates** — the ability to update all plugins and themes across every client site without fear of breaking anything.

The primary go-to-market motion is an AppSumo Lifetime Deal launch — a channel no current WordPress management SaaS uses, despite WordPress tools historically being among AppSumo's best-performing categories. Conservative projections: 500–2,000 LTD buyers at $59–79 generating $30K–$135K net launch revenue, followed by MRR growth through premium feature upsells.

The market for WordPress site management software is estimated at $2 billion (2025) growing at 15% CAGR to $6 billion by 2033. The serviceable segment for the 5–25 site tier is 300,000–500,000 buyers with willingness to pay $19–39/month, representing an $87M–$174M ARR opportunity at 1% capture.

---

## Core Vision

### Problem Statement

WordPress freelancers and small agencies managing 5–25 client sites spend disproportionate time on repetitive maintenance — logging into each site individually, checking plugin update statuses, running backups, and monitoring uptime. Worse, they often **delay or avoid running updates entirely** because a broken plugin update can crash a client site, triggering an emergency call, reputation damage, and hours of unpaid debugging.

This creates a compounding problem: delayed updates accumulate security vulnerabilities across an entire client portfolio, each one a liability. The anxiety of "what if this update breaks something" is the #1 emotional pain point for WordPress maintainers managing multiple sites.

Current solutions fail to resolve this at a price and complexity level that matches the freelance market:
- **ManageWP** (GoDaddy): Full-featured but $300/month for 25 sites, complex dashboard, and GoDaddy ownership has eroded trust
- **MainWP / InfiniteWP**: Free/cheap but require self-hosting a WordPress control panel — a technical barrier that disqualifies most non-developer freelancers
- **WP Umbrella**: The closest viable alternative, but per-site pricing (~$55/month for 25 sites) and no LTD option leave the most price-sensitive segment underserved

### Problem Impact

The problem has three compounding layers:

**Time cost:** Without a central dashboard, managing 25 sites means 25 separate logins, 25 manual update checks, 25 individual backup verifications. For a solo freelancer, this is a full workday per week — time that could be billed to clients.

**Risk cost:** Deferred updates mean deferred security patches. One compromised client site can cascade into a reputation-destroying incident affecting the freelancer's entire client base.

**Emotional cost:** The anxiety of bulk updates — "if I push this plugin update to all 25 sites at once and it breaks the WooCommerce store, I'm getting calls at midnight" — is so pervasive that many freelancers refuse to automate what should be a routine task. This anxiety is the core emotional driver for purchasing a management tool.

### Why Existing Solutions Fall Short

| Tool | Core Failure for the 5–25 Site Freelancer |
|------|------------------------------------------|
| ManageWP | ~$300/month for 25 sites with full features; complex UI; GoDaddy trust deficit |
| MainWP | Free core but requires self-hosting a dedicated WordPress install; hosting incompatibilities with WP Engine, InMotion, BlueHost |
| InfiniteWP | Same self-hosting barrier as MainWP; less actively developed |
| WP Umbrella | Best current hosted alternative, but per-site pricing (~$55/month for 25 sites) and no LTD create a conversion gap with price-sensitive buyers |
| Divi Dash | Free with Divi but Divi-locked, no backups (yet), no uptime monitoring (yet) |

**The structural gap:** No hosted WordPress management SaaS currently offers a Lifetime Deal on AppSumo. WordPress tools are historically among AppSumo's best-performing categories (iThemes, WPForms, Thrive Suite). This is not a coincidence — the WordPress freelance market is intensely cost-sensitive and AppSumo-native in its purchasing behavior.

### Proposed Solution

A hosted SaaS WordPress site management dashboard purpose-built for freelancers managing 5–25 client sites, with:

1. **One WordPress plugin per managed site** (one-click install via dashboard)
2. **Central dashboard**: update status, last backup date, security scan status, uptime status per site — all in one view
3. **Bulk updates with staging rollback**: The hero feature. Stage updates on a test environment (or preview changes before applying), and roll back any site to its pre-update state in one click if something breaks
4. **Automated backups** to user-provided cloud storage (S3, Dropbox, Google Drive) — user brings storage, product provides orchestration
5. **Uptime monitoring** with email/SMS alerts
6. **Flat-tier pricing** ($19–39/month or $59–79 LTD) — no per-site math, no add-on confusion

The product's core promise: **"Update all your client WordPress sites without breaking anything. One click to roll back if you do."**

### Key Differentiators

**1. First AppSumo LTD in the category**
No current WordPress management SaaS offers a Lifetime Deal. This is the single strongest differentiator: it removes the entire monthly cost objection, which is the primary conversion barrier for the target segment. AppSumo's WordPress buyer base is a ready-made distribution channel with no acquisition cost.

**2. Staging rollback as the hero feature, not a premium add-on**
ManageWP charges extra for safe updates. WP Umbrella has visual regression testing but doesn't lead with it. This product's entire UX and marketing narrative centers on one thing: you can update 25 sites without fear. Rollback is the core value, not an upsell.

**3. Flat-tier pricing vs. per-site pricing**
"Up to 25 sites for $29/month" removes the per-site math anxiety. Freelancers adding their 11th or 16th site don't recalculate their bill. Psychological simplicity is a real conversion advantage over per-site models.

**4. Deliberate simplicity vs. ManageWP's feature bloat**
ManageWP has 20+ add-ons and a dashboard that takes hours to learn. This product does 5 things flawlessly: overview, updates, backups, uptime, security status. That's the entire product. No add-on store. No complexity tax.

**5. Independence from big company ownership**
GoDaddy's ownership of ManageWP is an active trust deficit. Long-time ManageWP users report loyalty erosion post-acquisition. An independent, founder-led product is a positioning advantage with this market segment.

---

## Target Users

### Primary Users

#### Persona 1: Alex — The Solo Freelance WordPress Developer

**Background:** Alex is a 32-year-old independent WordPress developer who has been freelancing for 6 years. He manages 18 client sites on monthly maintenance retainers at $75–150/month per site. He works from home and handles everything from design to hosting setup to ongoing maintenance.

**Day-to-Day Reality:** Every Tuesday morning is "maintenance day." Alex logs into each site manually, checks for plugin updates, runs backups (manually, to a Dropbox folder), and notes any uptime issues clients have reported. For 18 sites, this takes most of Tuesday. He bills it as 2 hours per site, but it's actually far less systematic than he presents to clients.

**Core Pain:** Three months ago, a WooCommerce plugin update on his biggest client's site broke checkout for 4 hours before Alex noticed. The client nearly fired him. Now Alex delays plugin updates for 2–3 weeks "to see if anyone else reports issues" — which means his entire portfolio runs outdated plugins for weeks at a time.

**What Alex Wants:**
- To know, in one glance, which sites have updates, which have backups running, and which are up
- To push updates to all sites at once and know that if one breaks, he can undo it before the client even notices
- To stop paying per-site fees that grow with his portfolio

**Why Alex Chooses This Product:**
- AppSumo LTD: "I hate monthly subscriptions. $79 forever for 25 sites? Done."
- Staging rollback: "If I can see before I push and roll back if it breaks, I'll stop dreading update day."
- Simplicity: ManageWP "looks like a NASA cockpit." This dashboard shows exactly what he needs.

**Success Moment:** First time Alex runs a bulk update across all 18 sites, one plugin has a conflict, he rolls back that single site in one click, and no client ever knows anything happened. "This is the first time maintenance felt like maintenance instead of Russian roulette."

---

#### Persona 2: Sarah — The Small Agency Owner

**Background:** Sarah runs a 3-person web agency that manages 35 client WordPress sites (boutique she started 4 years ago; originally just herself). Her team includes one developer and one project manager. Maintenance plans are a recurring revenue stream that funds the agency's stability.

**Day-to-Day Reality:** Her developer spends 10–15 hours/week on WordPress maintenance across the portfolio. They currently use ManageWP but are deeply frustrated: the per-site add-on pricing for features like backups, safe updates, and white-label reports has pushed their monthly cost to ~$280/month for 35 sites. After GoDaddy acquired ManageWP, support responsiveness declined noticeably.

**Core Pain:** ManageWP's pricing grows as the portfolio grows. Sarah's team did the math: at 50 sites, they'll hit $400+/month. The dashboard is also slow and cluttered — her developer says it "feels like it was designed for a 1000-site agency, not a 35-site studio."

**What Sarah Wants:**
- A reliable, fast tool that her developer can actually see themselves in without a training session
- Flat pricing that doesn't punish them for client growth
- White-label reporting to email clients a monthly maintenance summary (currently done manually in Google Docs)
- A tool that isn't owned by GoDaddy

**Why Sarah Switches:**
- Flat-tier pricing: $39/month for up to 50 sites vs. ManageWP's $280/month
- ManageWP trust deficit: "GoDaddy doesn't care about 35-site studios. I want a tool from someone who does."
- Simpler UX: Less time onboarding new developers to the tool

**Success Moment:** Sarah's developer completes a full portfolio update sweep in under 30 minutes vs. 3 hours previously. Monthly client reports are generated automatically. Sarah's maintenance plan margins increase from 35% to 60%.

---

### Secondary Users

**Client Stakeholders (View-Only Access)**
Occasionally, clients want visibility into their site's health without getting a monthly report email. A view-only client portal showing uptime status and last backup date would satisfy this need. Not an MVP feature, but relevant to agency positioning.

**Future Hires / Team Members**
As agencies grow, they add team members who need access to manage specific subsets of sites. Role-based access control (admin vs. site manager vs. read-only) becomes relevant as agency size increases. Not an MVP feature; becomes important at the Agency tier.

---

### User Journey

#### Alex's Journey (Solo Freelancer — LTD Buyer)

**Discovery:**
- Sees a Reddit post in r/Wordpress: "Switched from ManageWP to [Product] — $79 LTD on AppSumo, same features, way simpler"
- Follows AppSumo link; reads the deal page and 40+ reviews from early buyers
- Notes the 60-day money-back guarantee removes purchase risk
- Purchases immediately (LTD urgency + low perceived risk)

**Onboarding:**
- Installs the WordPress plugin on first 3 client sites using dashboard's guided installer
- Runs first bulk update on those 3 test sites; watches the update log in real time
- Connects Dropbox for automated backups on those same 3 sites
- Adds remaining 15 sites over the following week

**Core Usage:**
- Weekly: Opens dashboard Monday morning, sees the update queue for the week
- Tuesday: Runs staged bulk updates with one click, reviews results, rolls back one conflict
- Monthly: Downloads white-label maintenance reports (post-MVP feature)

**Aha Moment:**
First rollback event. One plugin update created a blank white screen on a client's homepage. Alex rolls it back in the dashboard before the client notices. "I'm never doing manual updates again."

**Long-Term:**
Alex refers 3 other freelancers via referral program. Upgrades to monthly plan when he grows past 25 sites. Writes a Capterra review: "Finally a ManageWP alternative that doesn't feel like enterprise software."

---

#### Sarah's Journey (Small Agency — Monthly Subscriber)

**Discovery:**
- Her developer reads a WP Tavern article comparing management tools post-GoDaddy-ManageWP acquisition
- Flags the article to Sarah with the note: "This could replace ManageWP and save us $200/month"
- Sarah starts a 14-day free trial

**Onboarding:**
- Developer migrates 10 sites from ManageWP to the new tool during the trial
- Validates backup reliability by running a test restore on a staging copy
- Team confirms the dashboard is faster and more intuitive than ManageWP

**Decision:**
- Sarah cancels ManageWP subscription; switches full portfolio to new tool
- Monthly plan at $39/month vs. $280/month previously = $241/month savings
- Maintenance plan margins jump; Sarah reinvests in new client acquisition

**Core Usage:**
- Developer runs weekly bulk updates across full portfolio in 30-minute windows
- Uptime alerts catch a hosting issue on one client site before client reports it
- Monthly automated reports replace manual Google Docs summaries

**Aha Moment:**
First month where no client contacts them about a site issue that the tool caught first. "This is what proactive maintenance actually looks like."

---

## Success Metrics

### User Success Metrics

The following outcomes indicate users are getting real value:

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to first successful bulk update | < 30 minutes after onboarding | Product analytics |
| Update completion rate (no rollback needed) | > 85% of bulk updates | Update logs |
| Rollback usage as positive signal | 5–15% of updates trigger rollback (shows tool is used proactively) | Update logs |
| Weekly active usage | > 70% of paid accounts log in at least once/week | Session analytics |
| Sites managed per account at 90 days | Average 12+ sites per paid account | Account data |
| Backup coverage | > 80% of managed sites have active backup schedules | Dashboard stats |
| Uptime alert response time | Median < 15 minutes from alert to user acknowledgment | Alert acknowledgment logs |

**The North Star Metric:** Number of sites actively managed per week across all paid accounts. This captures both retention (accounts stay active) and expansion (accounts add more sites).

### Business Objectives

**Objective 1: AppSumo Launch Success (Month 0–3)**
- Sell 1,000+ LTD units in the first 30 days of AppSumo launch
- Achieve 4.5+ star average on AppSumo deal page (drives organic discovery on the platform)
- Net launch revenue: $55,000–$135,000

**Objective 2: Product-Market Fit Validation (Month 3–6)**
- 60% of LTD buyers are still actively using the product at 90 days post-purchase
- NPS score > 40 among active users
- < 5% AppSumo refund rate (60-day money-back period)
- At least 3 organic r/Wordpress or independent blog posts referencing the product positively

**Objective 3: MRR Foundation (Month 6–12)**
- $10,000 MRR from combined sources: direct monthly/annual subscriptions + LTD upsell features
- 200+ active monthly/annual paying subscribers (non-LTD)
- LTD-to-MRR conversion rate: 15–25% of LTD buyers upgrading to premium features on MRR

**Objective 4: Sustainable Unit Economics**
- Infrastructure cost per active account: < $8/month (achieved via user-supplied backup storage)
- Gross margin: > 70% on monthly/annual plans
- LTD payback period: < 18 months per account

### Key Performance Indicators

**Acquisition KPIs:**
- AppSumo launch: 1,000 LTD buyers (conservative), 2,000+ (target), 5,000 (strong launch)
- Monthly organic signups post-launch: 50+ new free trials/month by Month 6
- Referral rate: 15%+ of new signups from user referrals

**Engagement KPIs:**
- Weekly active accounts: 70%+ of paid accounts
- Bulk update operations per month per account: 4+ (weekly cadence)
- Sites per account growth: +2 average sites per account in first 6 months

**Revenue KPIs:**
- Month 3 MRR: $2,000+
- Month 6 MRR: $5,000+
- Month 12 MRR: $10,000+
- LTD net revenue (first 30 days): $55,000+ (conservative), $135,000+ (target)

**Retention KPIs:**
- Monthly churn (paid monthly accounts): < 3%
- Annual plan renewal rate: > 85%
- AppSumo refund rate: < 5%

**Support / Quality KPIs:**
- Plugin-induced site breakage incidents reported by users: < 1% of bulk update operations
- Mean time to resolve critical support tickets: < 4 hours
- G2/Capterra average rating: 4.5+ stars within 6 months of launch

---

## MVP Scope

### Core Features

The MVP must deliver exactly five capabilities — nothing more. Every feature below directly addresses one of the two primary pain points: maintenance time burden and update anxiety.

**Feature 1: Central Dashboard**
- Single-screen overview showing all managed sites
- Per-site status columns: WP core version, plugins/themes needing updates, last backup timestamp, uptime status, last security scan result
- Color-coded urgency (green/yellow/red) for quick scanning
- No sub-navigation required to see everything relevant

**Feature 2: WordPress Connector Plugin**
- Lightweight plugin installed on each managed site (available on WordPress.org)
- Establishes secure API connection to the dashboard
- Reports update inventory, site health signals, uptime pings
- One-click install from the dashboard (generates a pre-authenticated download link)

**Feature 3: Bulk Updates with Staging Rollback (Hero Feature)**
- Select all or subset of sites for bulk plugin/theme/core updates
- Per-site, pre-update snapshot (database + files) taken automatically before update executes
- Real-time update log: success/failure per site, per plugin
- One-click rollback: restore any site to its pre-update snapshot from the dashboard
- Visual diff of what changed (plugin version numbers before/after)
- Update scheduling: run at low-traffic times (e.g., 3 AM in site's timezone)

**Feature 4: Automated Backups (Bring Your Own Storage)**
- Scheduled daily or weekly full-site backups (files + database)
- Supports S3-compatible storage, Dropbox, Google Drive (user provides credentials)
- Backup log: last successful backup, size, storage destination
- One-click manual backup trigger
- Basic restore: download backup archive to restore manually (automated restore is post-MVP)

**Feature 5: Uptime Monitoring + Alerts**
- HTTP uptime check every 5 minutes per site
- Email alerts on downtime detection (SMS alerts as paid add-on post-MVP)
- Uptime history: 30-day uptime percentage per site
- Basic response time tracking (flag slow sites)

### Out of Scope for MVP

These features are explicitly deferred to avoid scope creep and maintain a 4–6 week build timeline:

| Feature | Rationale for Deferral |
|---------|----------------------|
| White-label client reports | High-value for agencies but not essential for first-purchase decision; post-MVP upsell |
| Automated backup restore (one-click) | Complex to implement reliably; manual download restore solves 80% of use cases for MVP |
| Visual regression testing (screenshot diff) | WP Umbrella's differentiator; nice-to-have but not table-stakes for MVP |
| Team member / role-based access | Agency feature; solo freelancers (primary AppSumo buyer) don't need this at launch |
| Client-facing portal | Agency feature; Phase 2 |
| SMS alerts | Cost and infrastructure complexity; email alerts sufficient for MVP |
| WordPress multisite (network) support | Separate technical complexity; different user segment |
| Shopify / non-WordPress platforms | Out of scope entirely for this product |
| Plugin vulnerability database / security scanning | Can be added via third-party API (WPScan) in Phase 2; not table-stakes |
| Staging environment creation | Complex hosting integration; different from rollback (which uses local snapshots) |
| Billing management / client invoicing | Not a site management feature; out of scope permanently |

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **Onboarding success rate:** 80%+ of new signups successfully connect at least 3 sites within 7 days of signing up
2. **Bulk update adoption:** 60%+ of active accounts run at least one bulk update operation within their first 30 days
3. **Rollback usage:** Rollback feature is used by 10%+ of accounts — confirms the feature works and is trusted (not that it's needed constantly, but that users don't hesitate to use it)
4. **Retention signal:** 65%+ of trial accounts convert to paid (LTD or monthly); 70%+ of paid accounts are still active at 60 days
5. **AppSumo launch:** 500+ LTD buyers in first 30 days (proof that the market is willing to pay)
6. **NPS:** Net Promoter Score > 35 from first cohort of 100+ paying users

**Go/No-Go Decision Point at Month 3:**
If fewer than 500 LTD buyers and NPS < 30, reassess positioning and core feature messaging before investing in Phase 2 features. If 1,000+ LTD buyers and NPS > 40, immediately begin Phase 2 development (white-label reports, team access, automated restore).

### Future Vision

**Phase 2 (Month 3–9, post-AppSumo validation):**
- White-label monthly maintenance reports (PDF/email) — the #1 requested agency feature
- Automated backup restore from dashboard (not just download-and-restore-manually)
- Plugin vulnerability scanning via WPScan API integration
- SMS/Slack/webhook alerts for uptime and update events
- Team member access with role-based permissions (admin, manager, viewer)
- Client-facing read-only portal (uptime, backup status, last update)

**Phase 3 (Month 9–18, post-$10K MRR):**
- Visual regression testing: screenshot comparison before/after plugin updates
- WooCommerce-specific update safety checks (cart/checkout health validation)
- Bulk site provisioning from template (for agencies launching new client sites)
- API/Zapier integration for workflow automation
- Priority support tier as a paid add-on

**3-Year Vision:**
WordPress Multi-Site Manager becomes the go-to tool for independent WordPress professionals managing 5–100 sites — the tool they recommend to every freelancer colleague entering the market. Revenue path: $500K ARR by Year 3 from combined LTD upsells, monthly/annual plans, and white-label agency subscriptions. Potential expansion: Managed WooCommerce update workflows; performance monitoring (Core Web Vitals) integration; AI-powered update risk scoring ("this update has a 23% conflict rate across our user base — wait 48 hours").

The long-term defensibility comes from data: the aggregated knowledge of which plugin combinations break, which hosting providers have update compatibility issues, which plugin update versions are safe — becomes a proprietary dataset that no self-hosted tool can replicate.

---

## Competitive Positioning Summary

**Positioning Statement:**
"WordPress Multi-Site Manager is the only hosted WordPress management tool built specifically for freelancers managing 5–25 sites — with flat-tier pricing, a one-time payment option, and staging rollback as the default experience, not a premium add-on."

**Primary Message (for AppSumo / r/Wordpress):**
"Update 25 WordPress sites without breaking a single one. Pay once, manage forever."

**Secondary Message (for agency conversion from ManageWP):**
"Everything ManageWP does for your 5–25 site portfolio, for $39/month instead of $300. With actual support."

**Competitive Moat (near-term):**
- First-mover on AppSumo LTD in the category
- Community trust via r/Wordpress seeding and authentic early-user reviews
- Simplicity moat: deliberately not adding features that would make the product complex

**Competitive Moat (long-term):**
- Update safety dataset: aggregated knowledge of plugin compatibility, failure rates, safe update windows
- Community + brand: "the ManageWP alternative" becomes sticky brand recognition
- Switching cost: once all sites are connected and backups are running, switching has real friction

---

## Pricing Architecture

| Plan | Monthly | Annual | LTD (AppSumo Launch) |
|------|---------|--------|----------------------|
| Starter (up to 10 sites) | $19/mo | $190/yr | $59 |
| Pro (up to 25 sites) | $29/mo | $290/yr | $79 |
| Agency (up to 50 sites) | $39/mo | $390/yr | $99 |
| Enterprise (unlimited) | $79/mo | $790/yr | — |

LTD plans sold exclusively via AppSumo during the launch window. After AppSumo launch, only monthly/annual plans available.

**Post-MVP Paid Add-Ons (MRR funnel from LTD buyers):**
- White-label reports: $9/month
- Team members (up to 5): $15/month
- Priority support SLA: $19/month
- 100-site capacity upgrade: $20/month above LTD limit

---

## Go-to-Market Summary

**Launch Sequence:**
1. **Beta (6 weeks):** Seed r/Wordpress and targeted Facebook groups ("WordPress Freelancers") with free beta invites — aim for 50 active beta users to stress-test infrastructure and generate testimonials
2. **AppSumo Pre-Launch:** Submit for AppSumo review and queue (4–8 week lead time); use beta user testimonials and G2/Capterra initial reviews in AppSumo submission
3. **AppSumo Launch (Day 1):** Target WordPress communities simultaneously with launch announcement; aim for 100 reviews on AppSumo deal page within first 7 days (drives algorithmic boost on platform)
4. **Post-Launch (Month 2–3):** Convert AppSumo momentum to organic direct traffic via content marketing ("ManageWP alternative" SEO, comparison posts, YouTube walkthroughs)
5. **MRR Foundation (Month 4+):** Launch premium add-ons for LTD buyers (white-label reports, team access) to establish recurring revenue

**Primary Channels (ranked by expected impact):**
1. AppSumo deal launch — highest initial volume, zero CAC
2. r/Wordpress organic community seeding — targeted, high-intent audience
3. WP Tavern newsletter — trusted by WP professionals
4. WordPress.org plugin directory listing (for the connector plugin) — passive discovery
5. Facebook groups: "WordPress Freelancers", "WP Speed Up Group"
6. Content SEO: "ManageWP alternative", "manage multiple WordPress sites cheap"
