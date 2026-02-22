#!/bin/bash
# notify-telegram.sh — Sends agent completion summary to Telegram channel
# Usage: bash notify-telegram.sh <agent-name>

set -uo pipefail

AGENT_NAME="${1:?Usage: notify-telegram.sh <agent-name>}"
DATE=$(date +%Y-%m-%d)
BASE_DIR="$(cd "$(dirname "$0")" && pwd)"

# Load credentials
[ -f "$BASE_DIR/.env" ] && source "$BASE_DIR/.env"

BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
CHAT_ID="${TELEGRAM_CHAT_ID:-}"
GITHUB_REPO="${GITHUB_REPO_URL:-}"

# Skip if no Telegram credentials configured
if [ -z "$BOT_TOKEN" ] || [ -z "$CHAT_ID" ]; then
  echo "[$(date)] Telegram not configured, skipping notification for $AGENT_NAME" >> "$BASE_DIR/logs/cron.log"
  exit 0
fi

# Determine the output file based on agent
case "$AGENT_NAME" in
  reddit-scanner) FILE="$BASE_DIR/ideas/raw/reddit-$DATE.md" ;;
  hn-indiehackers) FILE="$BASE_DIR/ideas/raw/hn-indiehackers-$DATE.md" ;;
  competitor-analyst) FILE="$BASE_DIR/ideas/raw/competitor-analysis-$DATE.md" ;;
  trend-spotter) FILE="$BASE_DIR/ideas/raw/trends-$DATE.md" ;;
  idea-evaluator) FILE="$BASE_DIR/ideas/evaluated/evaluation-$DATE.md" ;;
  *) FILE="" ;;
esac

if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  MSG="Agent *$AGENT_NAME* completed but no output file found."
else
  # Extract summary (first 20 lines, escape markdown special chars)
  SUMMARY=$(head -20 "$FILE" | sed 's/[_*`\[]/\\&/g' | head -c 2000)
  LINES=$(wc -l < "$FILE" | tr -d ' ')
  FILENAME=$(basename "$FILE")

  MSG="*$AGENT_NAME* completed
$DATE | $LINES lines

${SUMMARY}
..."

  # Add GitHub link if repo URL is configured
  if [ -n "$GITHUB_REPO" ]; then
    MSG="${MSG}

[Full results on GitHub](${GITHUB_REPO}/blob/main/ideas/raw/${FILENAME})"
  fi
fi

# Send message (Telegram max is 4096 chars)
MSG=$(echo "$MSG" | head -c 4000)

curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
  -d chat_id="$CHAT_ID" \
  -d text="$MSG" \
  -d parse_mode="Markdown" > /dev/null 2>&1

echo "[$(date)] Telegram notification sent for $AGENT_NAME" >> "$BASE_DIR/logs/cron.log"
