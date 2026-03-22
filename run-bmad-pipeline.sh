#!/bin/bash
# run-bmad-pipeline.sh — Automatically runs BMAD workflows on top-scored ideas
# Picks ideas from ideas/shortlisted/ that score 85+ and don't yet have BMAD artifacts
# Runs: Market Research → Product Brief → PRD (one idea per execution)
#
# Usage: bash run-bmad-pipeline.sh [--idea <canonical-name>] [--step market|brief|prd]

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$BASE_DIR/logs"
DATE=$(date +%Y-%m-%d)
SHORTLISTED="$BASE_DIR/ideas/shortlisted"
BMAD_OUT="$BASE_DIR/_bmad-output/planning-artifacts"
mkdir -p "$LOG_DIR" "$BMAD_OUT"

[ -f "$BASE_DIR/.env" ] && source "$BASE_DIR/.env"

SPECIFIC_IDEA="${2:-}"
SPECIFIC_STEP="${4:-}"

log() {
  echo "[$(date)] [bmad] $*" >> "$LOG_DIR/cron.log"
  echo "$*"
}

notify() {
  if [ -n "${TELEGRAM_BOT_TOKEN:-}" ] && [ -n "${TELEGRAM_CHAT_ID:-}" ]; then
    curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d chat_id="$TELEGRAM_CHAT_ID" -d text="$1" -d disable_web_page_preview="true" > /dev/null 2>&1
  fi
}

# ─── Find the best idea to process next ───
# Priority: 1) ideas mid-pipeline (have research but need brief/PRD) 2) new ideas without research
pick_idea() {
  if [ -n "$SPECIFIC_IDEA" ]; then
    echo "$SPECIFIC_IDEA"
    return
  fi

  # First priority: find ideas that are mid-pipeline (have research, need brief or PRD)
  IN_PROGRESS=""
  IN_PROGRESS_SCORE=0
  for FILE in "$SHORTLISTED"/*.md; do
    [ ! -f "$FILE" ] && continue
    NAME=$(basename "$FILE" .md)

    # Must have market research already
    local HAS_RES
    HAS_RES=$(find "$BMAD_OUT/research" -name "*${NAME}*" -print -quit 2>/dev/null || true)
    [ -z "$HAS_RES" ] && continue

    # Skip if already has a PRD (fully done)
    local HAS_P
    HAS_P=$(find "$BMAD_OUT" -maxdepth 1 \( -name "*prd*${NAME}*" -o -name "*${NAME}*prd*" \) -print -quit 2>/dev/null || true)
    [ -n "$HAS_P" ] && continue

    # This idea is mid-pipeline — pick the highest scoring one
    SCORE=$(head -5 "$FILE" | grep -oP '[0-9]+(?=/10[05]|/95)' | head -1 || echo "0")
    if [ "${SCORE:-0}" -gt "$IN_PROGRESS_SCORE" ]; then
      IN_PROGRESS_SCORE=$SCORE
      IN_PROGRESS="$NAME"
    fi
  done

  if [ -n "$IN_PROGRESS" ]; then
    echo "$IN_PROGRESS"
    return
  fi

  # Second priority: find new ideas without any BMAD artifacts
  BEST=""
  BEST_SCORE=0
  for FILE in "$SHORTLISTED"/*.md; do
    [ ! -f "$FILE" ] && continue
    NAME=$(basename "$FILE" .md)

    # Skip if already has BMAD market research
    local HAS_MR
    HAS_MR=$(find "$BMAD_OUT/research" -name "*${NAME}*" -print -quit 2>/dev/null || true)
    [ -n "$HAS_MR" ] && continue

    # Extract score
    SCORE=$(head -5 "$FILE" | grep -oP '[0-9]+(?=/10[05]|/95)' | head -1 || echo "0")
    if [ "${SCORE:-0}" -gt "$BEST_SCORE" ]; then
      BEST_SCORE=$SCORE
      BEST="$NAME"
    fi
  done

  if [ -z "$BEST" ]; then
    log "No unprocessed ideas found"
    return 1
  fi

  echo "$BEST"
}

# ─── Determine what BMAD step to run next for an idea ───
next_step() {
  local IDEA="$1"

  if [ -n "$SPECIFIC_STEP" ]; then
    echo "$SPECIFIC_STEP"
    return
  fi

  # Check what artifacts already exist
  local HAS_RESEARCH HAS_BRIEF HAS_PRD
  HAS_RESEARCH=$(find "$BMAD_OUT/research" -name "*${IDEA}*" -print -quit 2>/dev/null || true)
  HAS_BRIEF=$(find "$BMAD_OUT" -maxdepth 1 \( -name "*brief*${IDEA}*" -o -name "*${IDEA}*brief*" \) -print -quit 2>/dev/null || true)
  HAS_PRD=$(find "$BMAD_OUT" -maxdepth 1 \( -name "*prd*${IDEA}*" -o -name "*${IDEA}*prd*" \) -print -quit 2>/dev/null || true)

  if [ -z "$HAS_RESEARCH" ]; then
    echo "market"
  elif [ -z "$HAS_BRIEF" ]; then
    echo "brief"
  elif [ -z "$HAS_PRD" ]; then
    echo "prd"
  else
    echo "done"
  fi
}

# ─── Run a BMAD step ───
run_step() {
  local IDEA="$1"
  local STEP="$2"
  local IDEA_FILE="$SHORTLISTED/${IDEA}.md"
  local IDEA_CONTENT
  IDEA_CONTENT=$(cat "$IDEA_FILE")

  log "Running BMAD step '$STEP' for idea: $IDEA"

  case "$STEP" in
    market)
      PROMPT="You are running an automated BMAD market research workflow. Do NOT ask questions — use the context provided to complete the research autonomously.

CONTEXT — This is the shortlisted idea from our research pipeline:
---
$IDEA_CONTENT
---

INSTRUCTIONS:
1. Read the workflow at $BASE_DIR/_bmad/bmm/workflows/1-analysis/research/workflow-market-research.md
2. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
3. The research topic is: '${IDEA}' (as described in the context above)
4. Research goals: Validate market size, identify competitors, find pricing gaps, assess LTD viability
5. Scope: Deep dive into this specific vertical
6. Skip all interactive prompts — you have all the context you need
7. Run the full market research using web search
8. Save the output to $BMAD_OUT/research/market-${IDEA}-research-${DATE}.md
9. Follow the research template format from the workflow"
      ;;

    brief)
      # Find the market research file
      RESEARCH_FILE=$(ls "$BMAD_OUT"/research/*"$IDEA"* 2>/dev/null | head -1)
      RESEARCH_CONTENT=""
      if [ -n "$RESEARCH_FILE" ]; then
        RESEARCH_CONTENT=$(cat "$RESEARCH_FILE")
      fi

      PROMPT="You are running an automated BMAD product brief workflow. Do NOT ask questions — use the context provided to complete the brief autonomously.

CONTEXT — Shortlisted idea:
---
$IDEA_CONTENT
---

MARKET RESEARCH (already completed):
---
$RESEARCH_CONTENT
---

INSTRUCTIONS:
1. Read the workflow at $BASE_DIR/_bmad/bmm/workflows/1-analysis/create-product-brief/workflow.md
2. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
3. Using the shortlisted idea and market research above, create a comprehensive product brief
4. The product vision, target users, key features, and competitive positioning are all in the context
5. Skip all interactive prompts and menus — you have all the context you need
6. Follow all step files in sequence, reading each fully before executing
7. Save the output to $BMAD_OUT/product-brief-${IDEA}.md"
      ;;

    prd)
      BRIEF_FILE=$(ls "$BMAD_OUT"/*brief*"$IDEA"* "$BMAD_OUT"/*"$IDEA"*brief* 2>/dev/null | head -1)
      BRIEF_CONTENT=""
      if [ -n "$BRIEF_FILE" ]; then
        BRIEF_CONTENT=$(cat "$BRIEF_FILE")
      fi

      PROMPT="You are running an automated BMAD PRD creation workflow. Do NOT ask questions — use the context provided to create the PRD autonomously.

CONTEXT — Product Brief (already completed):
---
$BRIEF_CONTENT
---

ORIGINAL IDEA:
---
$IDEA_CONTENT
---

INSTRUCTIONS:
1. Read the workflow at $BASE_DIR/_bmad/bmm/workflows/2-plan-workflows/create-prd/workflow-create-prd.md
2. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
3. Using the product brief above, create a full PRD
4. Skip all interactive prompts — you have all the context you need
5. Follow all step files in sequence, reading each fully before executing
6. Save the output to $BMAD_OUT/prd-${IDEA}.md"
      ;;

    done)
      log "All BMAD steps complete for $IDEA"
      return 0
      ;;

    *)
      log "Unknown step: $STEP"
      return 1
      ;;
  esac

  # Execute the Claude command
  mkdir -p "$BMAD_OUT/research"
  timeout 2400 claude -p "$PROMPT" \
    --allowedTools "WebSearch,WebFetch,Read,Write,Glob,Grep,Edit" \
    >> "$LOG_DIR/bmad-${IDEA}-${STEP}-${DATE}.log" 2>&1

  EXIT_CODE=$?
  log "BMAD step '$STEP' for '$IDEA' finished (exit: $EXIT_CODE)"

  if [ $EXIT_CODE -eq 0 ]; then
    notify "BMAD $STEP complete for: $IDEA ($DATE)"

    # Update decisions.md — move to VALIDATING if it was NEW
    if grep -q "$IDEA" "$BASE_DIR/ideas/decisions.md" 2>/dev/null; then
      log "Idea '$IDEA' already in decisions.md"
    else
      # Append to VALIDATING section
      SCORE=$(head -5 "$IDEA_FILE" | grep -oE '[0-9]+/105' | head -1 || echo "?/105")
      log "Adding '$IDEA' to decisions.md as VALIDATING"
    fi
  fi

  # Auto-commit
  cd "$BASE_DIR"
  git add _bmad-output/ ideas/ 2>/dev/null || true
  git commit -m "[bmad] $STEP for $IDEA ($DATE)" 2>/dev/null || true
  git push origin main 2>> "$LOG_DIR/cron.log" || true

  return $EXIT_CODE
}

# ─── Main ───

IDEA=$(pick_idea) || exit 0
STEP=$(next_step "$IDEA")

if [ "$STEP" = "done" ]; then
  log "Idea '$IDEA' already fully processed through BMAD"
  exit 0
fi

log "=== BMAD Pipeline: $IDEA → step: $STEP ==="
run_step "$IDEA" "$STEP"
