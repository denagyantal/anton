# Research Team - Idea Discovery & AutoMVP System

This folder contains a Claude-powered research team that continuously discovers and evaluates new SaaS/product ideas, then automatically feeds top ideas through the full BMAD pipeline — from market research all the way to a working MVP codebase.

## Quick Start

```bash
# Run everything manually (research → evaluate → BMAD → AutoMVP)
bash run-all.sh

# Or run just the AutoMVP pipeline on ideas with completed PRDs
bash run-all.sh automvp

# Or run AutoMVP directly for a specific idea
bash run-automvp.sh --idea affordable-helpdesk

# Install the daily cron schedule (includes AutoMVP afternoon slots)
bash setup-cron.sh --install
```

## How to Use

Run any agent by opening its `.md` file and asking Claude to execute the research prompt. Each agent focuses on a different source/angle.

### Agents

| Agent | File | Purpose |
|-------|------|---------|
| Reddit Scanner | `agents/reddit-scanner.md` | Scans Reddit for pain points, feature requests, and validated ideas |
| HN & Indie Hackers | `agents/hn-indiehackers.md` | Monitors Hacker News and Indie Hackers for trending products and gaps |
| Competitor Analyst | `agents/competitor-analyst.md` | Analyzes competitors to find underserved features and pricing gaps |
| Trend Spotter | `agents/trend-spotter.md` | Identifies emerging trends from Product Hunt, X/Twitter, and Google Trends |
| Idea Evaluator | `agents/idea-evaluator.md` | Scores and ranks collected ideas using the 10-step playbook framework |

### Full Pipeline (Automated)

The entire flow runs automatically via `run-all.sh` or cron:

```
Phase 1: Research        Phase 2: Evaluate      Phase 3: BMAD         Phase 4: AutoMVP
┌─────────────────┐
│ Reddit Scanner   │──┐
│ HN/IndieHackers  │──┤  ideas/raw/   ┌────────────┐  ┌──────────────┐  ┌──────────────────┐
│ Competitor Analyst│──┼────────────►  │  Evaluator │──► Market Res.  │──► Architecture     │
│ Trend Spotter    │──┘               │  + Dedup   │  │ Product Brief│  │ Epics & Stories   │
└─────────────────┘                   └─────┬──────┘  │ PRD          │  │ Sprint Planning   │
                                            │         └──────────────┘  │ Story Creation    │
                                     ideas/shortlisted/  _bmad-output/  │ Dev Implementation│
                                     ideas/decisions.md                 └────────┬─────────┘
                                                                          mvps/<idea>/src/
```

### Automation Scripts

| Script | Purpose |
|--------|---------|
| `run-all.sh` | Orchestrates the full pipeline: `research` → `evaluate` → `bmad` → `automvp` |
| `run-all.sh research` | Run only the 4 research agents (parallel) |
| `run-all.sh evaluate` | Run only the evaluator + dedup |
| `run-all.sh bmad` | Run only the BMAD pipeline on the top unprocessed idea |
| `run-all.sh automvp` | Run only the AutoMVP pipeline on ideas with completed PRDs |
| `run-agent.sh <name>` | Run a single research agent |
| `run-evaluator.sh` | Run evaluator (skips if <2 raw files today) |
| `run-bmad-pipeline.sh` | Run next BMAD step on highest-scoring unprocessed idea |
| `run-automvp.sh` | Run next AutoMVP step (architecture → epics → sprint → stories → dev) |
| `dedup-shortlisted.sh` | Merge duplicate shortlisted ideas (`--dry-run` or `--merge`) |
| `setup-cron.sh` | Install/remove/show the daily cron schedule |
| `notify-telegram.sh` | Send Telegram notification for an agent run |

### Cron Schedule (via `bash setup-cron.sh --install`)

| Time | What runs |
|------|-----------|
| 6:00 AM | Research agents (reddit, HN, competitors, trends) in parallel |
| 7:30 AM | Evaluator + dedup |
| 8:30 AM | BMAD market research (auto-picks top unprocessed idea) |
| 9:30 AM | BMAD product brief |
| 10:30 AM | BMAD PRD creation |
| 11:30 AM | AutoMVP: architecture |
| 12:30 PM | AutoMVP: epics & stories |
| 1:30 PM | AutoMVP: sprint planning |
| 2:30 PM | AutoMVP: story creation |
| 3:30-5:30 PM | AutoMVP: dev implementation (up to 3 stories) |

### Workflow

1. Run individual agents to gather raw ideas → output goes to `ideas/raw/`
2. Run the Idea Evaluator to score and rank ideas → output goes to `ideas/evaluated/`
3. Best ideas get a full writeup in `ideas/shortlisted/` (using canonical filenames to avoid duplicates)
4. Track idea decisions in `ideas/decisions.md` (NEW → VALIDATING → BUILDING / PARKED / REJECTED)
5. Top ideas automatically flow into BMAD → output goes to `_bmad-output/planning-artifacts/`
6. Ideas with completed PRDs flow into AutoMVP → output goes to `mvps/<idea-name>/`

### BMAD Integration

The pipeline automatically feeds top-scoring shortlisted ideas (85+) through BMAD's product development phases:

1. **Market Research** — Deep competitive/market analysis using BMAD's research workflow
2. **Product Brief** — Collaborative discovery brief using research + shortlisted idea data
3. **PRD** — Full Product Requirements Document ready for architecture/implementation

Run `bash run-bmad-pipeline.sh` to process the next idea, or let cron handle it daily.

Use BMAD interactively anytime with: `/bmad-agent-bmad-master`

### AutoMVP — Automated MVP Creator

AutoMVP extends the BMAD pipeline to automatically generate working full-stack MVP codebases. It picks ideas that have completed PRDs and runs them through architecture, epics, sprint planning, story creation, and actual code implementation.

**Steps (runs after BMAD's market → brief → PRD):**

| Step | What happens |
|------|-------------|
| Architecture | Creates technical architecture decisions (tech stack, data model, APIs) |
| Epics | Breaks PRD into epics with detailed user stories and acceptance criteria |
| Sprint Planning | Generates sprint-status.yaml tracking all stories |
| Story Creation | Creates detailed story files with tasks and dev notes (loops per story) |
| Dev Implementation | Implements each story using TDD red-green-refactor (loops per story) |

**Usage:**
```bash
bash run-automvp.sh                              # Auto-pick best idea, run next step
bash run-automvp.sh --idea affordable-helpdesk   # Specific idea
bash run-automvp.sh --step architecture           # Force a specific step
bash run-automvp.sh --max-stories 3               # Process multiple stories per run
```

**Output structure:**
```
mvps/<idea-name>/
  planning/            # Architecture, epics, PRD copies
  stories/             # Story spec files
  sprint-status.yaml   # Sprint tracking
  src/                 # The generated MVP code
```

Each cron invocation processes one step or one story. Multiple afternoon cron slots handle the story loop.

### Deduplication

The evaluator uses canonical filenames to prevent duplicate shortlisted files. Run `bash dedup-shortlisted.sh --dry-run` to check for duplicates, or `--merge` to consolidate them.

### Decision Tracking

Use `ideas/decisions.md` to move ideas through the pipeline. Each shortlisted idea has a `## Signal History` table tracking how many times it appeared and score changes over time.

### The 10-Step Playbook Filter (from r/SaaSMarketing)

Every idea is evaluated against this framework:
1. Does the idea already exist with paying customers?
2. Can we study competitors and build what customers want most?
3. Is it viable for a Lifetime Deal ($59-$100)?
4. Can we find customers on Reddit, Facebook Groups, X?
5. Can LTD revenue fund content creation?
6. Is there AppSumo launch potential?
7. Can we get G2/Trustpilot reviews from early users?
8. Is there a clear path to MRR transition?
