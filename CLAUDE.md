# Research Team - Idea Discovery System

This folder contains a Claude-powered research team that continuously discovers and evaluates new SaaS/product ideas from various sources.

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

### Workflow

1. Run individual agents to gather raw ideas → output goes to `ideas/raw/`
2. Run the Idea Evaluator to score and rank ideas → output goes to `ideas/evaluated/`
3. Best ideas get a full writeup in `ideas/shortlisted/`

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
