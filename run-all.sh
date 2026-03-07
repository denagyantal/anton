#!/bin/bash
# run-all.sh — Full daily automation: research agents → evaluator → BMAD pipeline
# Usage:
#   bash run-all.sh              # Run everything (research + evaluate + BMAD)
#   bash run-all.sh research     # Run only research agents
#   bash run-all.sh evaluate     # Run only evaluator
#   bash run-all.sh bmad         # Run only BMAD pipeline on top ideas
#
# Designed for cron. Example (daily at 6am, evaluate at 9am, BMAD at 10am):
#   0 6 * * * cd /home/user/anton && bash run-all.sh research
#   0 9 * * * cd /home/user/anton && bash run-all.sh evaluate
#   0 10 * * * cd /home/user/anton && bash run-all.sh bmad

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$BASE_DIR/logs"
DATE=$(date +%Y-%m-%d)
MODE="${1:-all}"
mkdir -p "$LOG_DIR"

[ -f "$BASE_DIR/.env" ] && source "$BASE_DIR/.env"

log() {
  echo "[$(date)] $*" >> "$LOG_DIR/cron.log"
  echo "$*"
}

notify() {
  local MSG="$1"
  if [ -n "${TELEGRAM_BOT_TOKEN:-}" ] && [ -n "${TELEGRAM_CHAT_ID:-}" ]; then
    curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d chat_id="$TELEGRAM_CHAT_ID" -d text="$MSG" -d disable_web_page_preview="true" > /dev/null 2>&1
  fi
}

# ─── Phase 1: Research Agents (run in parallel) ───
run_research() {
  log "=== Phase 1: Research Agents ==="

  # Run all 4 scanners in parallel
  PIDS=""
  for AGENT in reddit-scanner hn-indiehackers competitor-analyst trend-spotter; do
    bash "$BASE_DIR/run-agent.sh" "$AGENT" &
    PIDS="$PIDS $!"
  done

  # Wait for all and track failures
  FAILURES=""
  for PID in $PIDS; do
    if ! wait "$PID"; then
      FAILURES="$FAILURES $PID"
    fi
  done

  if [ -n "$FAILURES" ]; then
    log "WARNING: Some research agents failed"
  else
    log "All research agents completed successfully"
  fi
}

# ─── Phase 2: Evaluate ───
run_evaluate() {
  log "=== Phase 2: Evaluator ==="
  bash "$BASE_DIR/run-evaluator.sh"

  # Run dedup after evaluation
  log "Running dedup check..."
  bash "$BASE_DIR/dedup-shortlisted.sh" --merge >> "$LOG_DIR/cron.log" 2>&1 || true
}

# ─── Phase 3: BMAD Pipeline on top ideas ───
run_bmad() {
  log "=== Phase 3: BMAD Pipeline ==="
  bash "$BASE_DIR/run-bmad-pipeline.sh"
}

# ─── Execute selected phases ───
case "$MODE" in
  all)
    run_research
    run_evaluate
    run_bmad
    notify "Daily pipeline complete ($DATE). Check ideas/decisions.md for updates."
    ;;
  research)
    run_research
    ;;
  evaluate)
    run_evaluate
    ;;
  bmad)
    run_bmad
    ;;
  *)
    echo "Usage: run-all.sh [all|research|evaluate|bmad]"
    exit 1
    ;;
esac

log "=== Pipeline '$MODE' finished ==="
