#!/bin/bash
# notify-telegram.sh — Sends clean idea summaries to Telegram channel
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

if [ -z "$BOT_TOKEN" ] || [ -z "$CHAT_ID" ]; then
  echo "[$(date)] Telegram not configured, skipping notification for $AGENT_NAME" >> "$BASE_DIR/logs/cron.log"
  exit 0
fi

# Determine output file and GitHub path
case "$AGENT_NAME" in
  reddit-scanner)      FILE="$BASE_DIR/ideas/raw/reddit-$DATE.md";              GH_PATH="ideas/raw/reddit-$DATE.md";              LABEL="REDDIT" ;;
  hn-indiehackers)     FILE="$BASE_DIR/ideas/raw/hn-indiehackers-$DATE.md";     GH_PATH="ideas/raw/hn-indiehackers-$DATE.md";     LABEL="HN + INDIE HACKERS" ;;
  competitor-analyst)  FILE="$BASE_DIR/ideas/raw/competitor-analysis-$DATE.md";  GH_PATH="ideas/raw/competitor-analysis-$DATE.md";  LABEL="COMPETITORS" ;;
  trend-spotter)       FILE="$BASE_DIR/ideas/raw/trends-$DATE.md";              GH_PATH="ideas/raw/trends-$DATE.md";               LABEL="TRENDS" ;;
  idea-evaluator)      FILE="$BASE_DIR/ideas/evaluated/evaluation-$DATE.md";    GH_PATH="ideas/evaluated/evaluation-$DATE.md";     LABEL="EVALUATOR" ;;
  *)                   FILE=""; GH_PATH=""; LABEL="$AGENT_NAME" ;;
esac

if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
    -d chat_id="$CHAT_ID" -d text="$LABEL — no output found." > /dev/null 2>&1
  exit 0
fi

# --- Extract top 10 ideas ---

if [ "$AGENT_NAME" = "idea-evaluator" ]; then
  # Evaluator: "### Idea Name — Score: XX/105" + Verdict line
  IDEAS=$(awk '
    /^###.*Score:/ {
      name = $0
      gsub(/^###[ ]*/, "", name)
      # Strip leading number+dot: "1. Foo" -> "Foo"
      sub(/^[0-9]+\.[ ]*/, "", name)
      # Clean markdown chars
      gsub(/\*/, "", name)
      ideas[++n] = name
    }
    /Verdict/ && n > 0 && !verdict[n] {
      v = $0
      gsub(/.*Verdict[*]*:[ ]*/, "", v)
      gsub(/\*/, "", v)
      if (v != "") verdict[n] = v
    }
    END {
      for (i = 1; i <= n && i <= 10; i++) {
        printf "%d. %s", i, ideas[i]
        if (verdict[i]) printf "  [%s]", verdict[i]
        printf "\n"
      }
    }
  ' "$FILE")
else
  # Scanner agents: "## Idea Title" + first sentence of Pain Point / Core Value Prop
  IDEAS=$(awk '
    /^## / {
      name = $0
      gsub(/^##[ ]*/, "", name)
      # Strip leading number+dot: "1. Foo" -> "Foo"
      sub(/^[0-9]+\.[ ]*/, "", name)
      # Clean markdown chars
      gsub(/[*`_\[\]]/, "", name)
      # Skip non-idea headings (Summary, Patterns, Trends, etc.)
      low = tolower(name)
      if (low ~ /^summary/ || low ~ /^key pattern/ || low ~ /^cross-cut/ || low ~ /^top pick/ || low ~ /^conclusion/ || low ~ /^methodology/) next
      ideas[++n] = name
      next
    }
    n > 0 && !desc[n] && /Pain Point:|Core Value Prop:|Gap\/Opportunity:|Identified Gap/ {
      line = $0
      # Strip the field label
      sub(/^-[ ]*\*\*[^*]+\*\*:[ ]*/, "", line)
      # Clean markdown
      gsub(/[*`_\[\]]/, "", line)
      # Take first sentence only
      if (match(line, /[.!?] [A-Z]/)) line = substr(line, 1, RSTART)
      # Cap length
      if (length(line) > 120) line = substr(line, 1, 117) "..."
      desc[n] = line
    }
    END {
      for (i = 1; i <= n && i <= 10; i++) {
        if (desc[i])
          printf "%d. %s\n   %s\n\n", i, ideas[i], desc[i]
        else
          printf "%d. %s\n\n", i, ideas[i]
      }
    }
  ' "$FILE")
fi

# Build message
GH_LINK=""
if [ -n "$GITHUB_REPO" ] && [ -n "$GH_PATH" ]; then
  GH_LINK="${GITHUB_REPO}/blob/main/${GH_PATH}"
fi

MSG="$LABEL — $DATE

$IDEAS"

if [ -n "$GH_LINK" ]; then
  MSG="${MSG}
Full report: $GH_LINK"
fi

# Telegram max 4096 chars
MSG=$(printf "%s" "$MSG" | head -c 4000)

curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
  -d chat_id="$CHAT_ID" \
  -d text="$MSG" \
  -d disable_web_page_preview="true" > /dev/null 2>&1

echo "[$(date)] Telegram notification sent for $AGENT_NAME" >> "$BASE_DIR/logs/cron.log"
