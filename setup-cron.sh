#!/bin/bash
# setup-cron.sh — Installs the full automated pipeline crontab
# Usage: bash setup-cron.sh [--install | --remove | --show]

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
MODE="${1:---show}"

CRON_MARKER="# anton-research-pipeline"

# The schedule:
#   6:00 AM — Run all 4 research agents in parallel (~30 min each)
#   7:30 AM — Run evaluator + dedup (needs research output)
#   8:30 AM — Run BMAD market research on top unprocessed idea
#   9:30 AM — Run BMAD product brief (needs market research)
#  10:30 AM — Run BMAD PRD creation (needs product brief)
#  11:30 AM — AutoMVP: architecture (on ideas with completed PRD)
#  12:30 PM — AutoMVP: epics & stories design
#   1:30 PM — AutoMVP: sprint planning
#   2:30 PM — AutoMVP: story creation (1 story per run)
#   3:30 PM — AutoMVP: dev implementation (story 1)
#   4:30 PM — AutoMVP: dev implementation (story 2)
#   5:30 PM — AutoMVP: dev implementation (story 3)

CRON_JOBS="PATH=/root/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin $CRON_MARKER
# ─── Anton Research Pipeline ─── $CRON_MARKER
0 6 * * * cd $BASE_DIR && bash run-all.sh research >> logs/cron.log 2>&1 $CRON_MARKER
30 7 * * * cd $BASE_DIR && bash run-all.sh evaluate >> logs/cron.log 2>&1 $CRON_MARKER
30 8 * * * cd $BASE_DIR && bash run-bmad-pipeline.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 9 * * * cd $BASE_DIR && bash run-bmad-pipeline.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 10 * * * cd $BASE_DIR && bash run-bmad-pipeline.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 11 * * * cd $BASE_DIR && bash run-automvp.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 12 * * * cd $BASE_DIR && bash run-automvp.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 13 * * * cd $BASE_DIR && bash run-automvp.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 14 * * * cd $BASE_DIR && bash run-automvp.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 15 * * * cd $BASE_DIR && bash run-automvp.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 16 * * * cd $BASE_DIR && bash run-automvp.sh >> logs/cron.log 2>&1 $CRON_MARKER
30 17 * * * cd $BASE_DIR && bash run-automvp.sh >> logs/cron.log 2>&1 $CRON_MARKER"

case "$MODE" in
  --install)
    # Remove old entries, add new
    (crontab -l 2>/dev/null | grep -v "$CRON_MARKER"; echo "$CRON_JOBS") | crontab -
    echo "Crontab installed. Schedule:"
    echo ""
    echo "  6:00 AM — Research agents (reddit, HN, competitors, trends)"
    echo "  7:30 AM — Evaluator + dedup"
    echo "  8:30 AM — BMAD market research (auto-picks top idea)"
    echo "  9:30 AM — BMAD product brief"
    echo " 10:30 AM — BMAD PRD creation"
    echo " 11:30 AM — AutoMVP: architecture"
    echo " 12:30 PM — AutoMVP: epics & stories"
    echo "  1:30 PM — AutoMVP: sprint planning"
    echo "  2:30 PM — AutoMVP: story creation"
    echo "  3:30 PM — AutoMVP: dev implementation (story 1)"
    echo "  4:30 PM — AutoMVP: dev implementation (story 2)"
    echo "  5:30 PM — AutoMVP: dev implementation (story 3)"
    echo ""
    echo "Run 'bash setup-cron.sh --show' to verify."
    ;;
  --remove)
    crontab -l 2>/dev/null | grep -v "$CRON_MARKER" | crontab -
    echo "Crontab entries removed."
    ;;
  --show)
    echo "=== Current crontab ==="
    crontab -l 2>/dev/null || echo "(empty)"
    echo ""
    echo "=== Would install ==="
    echo "$CRON_JOBS"
    ;;
  *)
    echo "Usage: setup-cron.sh [--install | --remove | --show]"
    exit 1
    ;;
esac
