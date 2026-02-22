#!/bin/bash
# run-agent.sh — Runs a research agent via Claude Code CLI
# Usage: bash run-agent.sh <agent-name>
# Agents: reddit-scanner, hn-indiehackers, competitor-analyst, trend-spotter, idea-evaluator

set -euo pipefail

AGENT_NAME="${1:?Usage: run-agent.sh <agent-name>}"
DATE=$(date +%Y-%m-%d)
HOUR=$(date +%H)
BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$BASE_DIR/logs"
mkdir -p "$LOG_DIR"

# Source env for Telegram credentials (if exists)
[ -f "$BASE_DIR/.env" ] && source "$BASE_DIR/.env"

# Map agent name to prompt and output file
case "$AGENT_NAME" in
  reddit-scanner)
    OUTPUT_FILE="$BASE_DIR/ideas/raw/reddit-${DATE}.md"
    PROMPT="Read $BASE_DIR/agents/reddit-scanner.md and execute the research. Save results to $OUTPUT_FILE"
    ;;
  hn-indiehackers)
    OUTPUT_FILE="$BASE_DIR/ideas/raw/hn-indiehackers-${DATE}.md"
    PROMPT="Read $BASE_DIR/agents/hn-indiehackers.md and execute the research. Save results to $OUTPUT_FILE"
    ;;
  competitor-analyst)
    OUTPUT_FILE="$BASE_DIR/ideas/raw/competitor-analysis-${DATE}.md"
    PROMPT="Read $BASE_DIR/agents/competitor-analyst.md and execute the research. Save results to $OUTPUT_FILE"
    ;;
  trend-spotter)
    OUTPUT_FILE="$BASE_DIR/ideas/raw/trends-${DATE}.md"
    PROMPT="Read $BASE_DIR/agents/trend-spotter.md and execute the research. Save results to $OUTPUT_FILE"
    ;;
  idea-evaluator)
    OUTPUT_FILE="$BASE_DIR/ideas/evaluated/evaluation-${DATE}.md"
    PROMPT="Read $BASE_DIR/agents/idea-evaluator.md and evaluate all ideas in $BASE_DIR/ideas/raw/. Save full evaluation to $OUTPUT_FILE. Save Tier 1 ideas individually to $BASE_DIR/ideas/shortlisted/"
    ;;
  *)
    echo "Unknown agent: $AGENT_NAME"
    echo "Valid agents: reddit-scanner, hn-indiehackers, competitor-analyst, trend-spotter, idea-evaluator"
    exit 1
    ;;
esac

# Ensure output directories exist
mkdir -p "$BASE_DIR/ideas/raw"
mkdir -p "$BASE_DIR/ideas/evaluated"
mkdir -p "$BASE_DIR/ideas/shortlisted"

# Run the agent
echo "[$(date)] Starting $AGENT_NAME" >> "$LOG_DIR/cron.log"

timeout 1800 claude -p "$PROMPT" \
  --allowedTools "WebSearch,WebFetch,Read,Write,Glob,Grep,Edit" \
  >> "$LOG_DIR/$AGENT_NAME-$DATE-${HOUR}h.log" 2>&1

EXIT_CODE=$?
echo "[$(date)] Finished $AGENT_NAME (exit: $EXIT_CODE)" >> "$LOG_DIR/cron.log"

# Auto-commit and push results to GitHub
cd "$BASE_DIR"
git add ideas/ logs/ 2>/dev/null || true
git commit -m "[$AGENT_NAME] $DATE $HOUR:00 automated run" 2>/dev/null || true
git push origin main 2>> "$LOG_DIR/cron.log" || true

# Send Telegram notification
if [ -f "$BASE_DIR/notify-telegram.sh" ]; then
  bash "$BASE_DIR/notify-telegram.sh" "$AGENT_NAME" || true
fi

exit $EXIT_CODE
