#!/bin/bash
# run-evaluator.sh — Runs the idea evaluator only if raw data exists for today
# Called by cron ~1 hour after the scanning agents finish

set -euo pipefail

DATE=$(date +%Y-%m-%d)
BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$BASE_DIR/logs"
RAW_DIR="$BASE_DIR/ideas/raw"
mkdir -p "$LOG_DIR"

# Check if at least 2 raw files exist for today
COUNT=$(ls "$RAW_DIR"/*-"$DATE".md 2>/dev/null | wc -l | tr -d ' ')
if [ "$COUNT" -lt 2 ]; then
  echo "[$(date)] Skipping evaluator — only $COUNT raw files for $DATE" >> "$LOG_DIR/cron.log"
  exit 0
fi

echo "[$(date)] Evaluator: found $COUNT raw files for $DATE, running..." >> "$LOG_DIR/cron.log"
bash "$BASE_DIR/run-agent.sh" idea-evaluator
