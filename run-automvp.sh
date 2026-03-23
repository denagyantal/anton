#!/bin/bash
# run-automvp.sh — Automated MVP Creator
# Takes a shortlisted idea (with existing PRD) and runs the full BMAD pipeline
# through architecture, epics, sprint planning, story creation, and dev implementation
# to produce a working MVP codebase.
#
# Usage:
#   bash run-automvp.sh                              # Auto-pick best idea, run next step
#   bash run-automvp.sh --idea affordable-helpdesk   # Specific idea
#   bash run-automvp.sh --step architecture           # Force specific step
#   bash run-automvp.sh --max-stories 3               # Process up to N stories per run (loop steps)

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$BASE_DIR/logs"
DATE=$(date +%Y-%m-%d)
SHORTLISTED="$BASE_DIR/ideas/shortlisted"
BMAD_OUT="$BASE_DIR/_bmad-output/planning-artifacts"
MVPS_DIR="$BASE_DIR/mvps"
mkdir -p "$LOG_DIR" "$MVPS_DIR"

[ -f "$BASE_DIR/.env" ] && source "$BASE_DIR/.env"

# ─── Parse arguments ───
SPECIFIC_IDEA=""
SPECIFIC_STEP=""
MAX_STORIES=1

while [[ $# -gt 0 ]]; do
  case "$1" in
    --idea) SPECIFIC_IDEA="$2"; shift 2 ;;
    --step) SPECIFIC_STEP="$2"; shift 2 ;;
    --max-stories) MAX_STORIES="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

log() {
  echo "[$(date)] [automvp] $*" >> "$LOG_DIR/cron.log"
  echo "$*"
}

notify() {
  if [ -n "${TELEGRAM_BOT_TOKEN:-}" ] && [ -n "${TELEGRAM_CHAT_ID:-}" ]; then
    curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d chat_id="$TELEGRAM_CHAT_ID" -d text="$1" -d disable_web_page_preview="true" > /dev/null 2>&1
  fi
}

# ─── Find an idea that has a PRD but hasn't been fully MVP'd yet ───
pick_idea() {
  if [ -n "$SPECIFIC_IDEA" ]; then
    echo "$SPECIFIC_IDEA"
    return
  fi

  BEST=""
  BEST_SCORE=0

  for FILE in "$SHORTLISTED"/*.md; do
    [ ! -f "$FILE" ] && continue
    NAME=$(basename "$FILE" .md)

    # Must have a PRD already
    local HAS_PRD
    HAS_PRD=$(find "$BMAD_OUT" -maxdepth 1 \( -name "*prd*${NAME}*" -o -name "*${NAME}*prd*" \) -print -quit 2>/dev/null || true)
    if [ -z "$HAS_PRD" ]; then
      continue
    fi

    # Skip if MVP is fully done (has src/ with files)
    if [ -d "$MVPS_DIR/$NAME/src" ] && [ "$(ls -A "$MVPS_DIR/$NAME/src" 2>/dev/null)" ]; then
      # Check if all stories are done
      if [ -f "$MVPS_DIR/$NAME/sprint-status.yaml" ]; then
        if ! grep -qE ':\s*(backlog|ready-for-dev|in-progress)\s*$' "$MVPS_DIR/$NAME/sprint-status.yaml" 2>/dev/null; then
          continue  # All stories done, skip this idea
        fi
      fi
    fi

    # Extract score
    SCORE=$(head -5 "$FILE" | grep -oP '[0-9]+(?=/10[05]|/95)' | head -1 || echo "0")
    if [ "${SCORE:-0}" -gt "$BEST_SCORE" ]; then
      BEST_SCORE=$SCORE
      BEST="$NAME"
    fi
  done

  if [ -z "$BEST" ]; then
    log "No ideas with PRD found for AutoMVP processing"
    return 1
  fi

  echo "$BEST"
}

# ─── Initialize the MVP directory for an idea ───
init_mvp_dir() {
  local IDEA="$1"
  local MVP="$MVPS_DIR/$IDEA"

  mkdir -p "$MVP/planning" "$MVP/stories" "$MVP/src"

  # Copy existing planning artifacts if not already present
  if [ ! -f "$MVP/planning/prd.md" ]; then
    PRD_FILE=$(find "$BMAD_OUT" -maxdepth 1 \( -name "*prd*${IDEA}*" -o -name "*${IDEA}*prd*" \) -print -quit 2>/dev/null || true)
    [ -n "$PRD_FILE" ] && cp "$PRD_FILE" "$MVP/planning/prd.md"
  fi

  if [ ! -f "$MVP/planning/product-brief.md" ]; then
    BRIEF_FILE=$(find "$BMAD_OUT" -maxdepth 1 \( -name "*brief*${IDEA}*" -o -name "*${IDEA}*brief*" \) -print -quit 2>/dev/null || true)
    [ -n "$BRIEF_FILE" ] && cp "$BRIEF_FILE" "$MVP/planning/product-brief.md"
  fi

  if [ ! -f "$MVP/planning/market-research.md" ]; then
    RESEARCH_FILE=$(find "$BMAD_OUT/research" -name "*${IDEA}*" -print -quit 2>/dev/null || true)
    [ -n "$RESEARCH_FILE" ] && cp "$RESEARCH_FILE" "$MVP/planning/market-research.md"
  fi

  # Copy the shortlisted idea file
  if [ ! -f "$MVP/planning/idea.md" ]; then
    cp "$SHORTLISTED/${IDEA}.md" "$MVP/planning/idea.md"
  fi
}

# ─── Determine what step to run next for an idea ───
next_step() {
  local IDEA="$1"
  local MVP="$MVPS_DIR/$IDEA"

  if [ -n "$SPECIFIC_STEP" ]; then
    echo "$SPECIFIC_STEP"
    return
  fi

  # Linear steps — check artifact existence
  if [ ! -f "$MVP/planning/architecture.md" ]; then
    echo "architecture"
  elif [ ! -f "$MVP/planning/epics.md" ]; then
    echo "epics"
  elif [ ! -f "$MVP/sprint-status.yaml" ]; then
    echo "sprint"
  elif grep -qE ':\s*backlog\s*$' "$MVP/sprint-status.yaml" 2>/dev/null; then
    echo "stories"
  elif grep -qE ':\s*ready-for-dev\s*$' "$MVP/sprint-status.yaml" 2>/dev/null; then
    echo "dev"
  else
    echo "done"
  fi
}

# ─── Get the next story key from sprint-status.yaml with a given status ───
next_story_key() {
  local STATUS_FILE="$1"
  local STATUS="$2"
  # Parse YAML for story keys with the given status (e.g., "  1-1-setup: backlog")
  grep -E ":\s*${STATUS}\s*$" "$STATUS_FILE" 2>/dev/null | head -1 | sed 's/^\s*//' | cut -d: -f1
}

# ─── Run a step ───
run_step() {
  local IDEA="$1"
  local STEP="$2"
  local MVP="$MVPS_DIR/$IDEA"
  local IDEA_FILE="$SHORTLISTED/${IDEA}.md"

  log "Running AutoMVP step '$STEP' for idea: $IDEA"

  local PROMPT=""
  local TOOLS="Read,Write,Glob,Grep,Edit"
  local TIMEOUT=2400

  case "$STEP" in
    architecture)
      local PRD_CONTENT
      PRD_CONTENT=$(cat "$MVP/planning/prd.md" 2>/dev/null || echo "")
      local BRIEF_CONTENT
      BRIEF_CONTENT=$(cat "$MVP/planning/product-brief.md" 2>/dev/null || echo "")

      PROMPT="You are running an automated BMAD architecture creation workflow. Do NOT ask questions or wait for user input — you have all the context you need. Complete the entire workflow autonomously.

CONTEXT — Product Requirements Document:
---
$PRD_CONTENT
---

CONTEXT — Product Brief:
---
$BRIEF_CONTENT
---

INSTRUCTIONS:
1. Read the architecture workflow at $BASE_DIR/_bmad/bmm/workflows/3-solutioning/create-architecture/workflow.md
2. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
3. Read each step file in the steps/ directory IN ORDER (step-01, step-01b, step-02, etc.)
4. For each step, execute fully using the PRD and brief context above
5. Skip ALL interactive menus, user approval prompts, and [C] continue prompts — treat them as automatically approved
6. Make all architectural decisions yourself based on the PRD requirements
7. Choose a modern full-stack web application architecture suitable for an MVP
8. Use the architecture template at $BASE_DIR/_bmad/bmm/workflows/3-solutioning/create-architecture/architecture-decision-template.md
9. Save the COMPLETE architecture document to $MVP/planning/architecture.md
10. The output must be a comprehensive, self-contained architecture document covering: tech stack, data model, API design, component structure, deployment approach"
      ;;

    epics)
      local PRD_CONTENT
      PRD_CONTENT=$(cat "$MVP/planning/prd.md" 2>/dev/null || echo "")
      local ARCH_CONTENT
      ARCH_CONTENT=$(cat "$MVP/planning/architecture.md" 2>/dev/null || echo "")

      PROMPT="You are running an automated BMAD epics and stories creation workflow. Do NOT ask questions or wait for user input — complete the entire workflow autonomously.

CONTEXT — Product Requirements Document:
---
$PRD_CONTENT
---

CONTEXT — Architecture:
---
$ARCH_CONTENT
---

INSTRUCTIONS:
1. Read the epics workflow at $BASE_DIR/_bmad/bmm/workflows/3-solutioning/create-epics-and-stories/workflow.md
2. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
3. Read each step file in the steps/ directory IN ORDER
4. For each step, execute fully using the PRD and architecture context above
5. Skip ALL interactive menus, user approval prompts, and [C] continue prompts — treat them as automatically approved
6. Use the epics template at $BASE_DIR/_bmad/bmm/workflows/3-solutioning/create-epics-and-stories/templates/epics-template.md
7. Break the PRD into epics organized by user value
8. Each epic should have 2-5 detailed user stories with complete acceptance criteria
9. Keep the scope realistic for an MVP — focus on core value proposition only
10. Save the COMPLETE epics document to $MVP/planning/epics.md"
      ;;

    sprint)
      local EPICS_CONTENT
      EPICS_CONTENT=$(cat "$MVP/planning/epics.md" 2>/dev/null || echo "")

      TIMEOUT=900
      PROMPT="You are running an automated BMAD sprint planning workflow. Do NOT ask questions — complete autonomously.

CONTEXT — Epics and Stories:
---
$EPICS_CONTENT
---

INSTRUCTIONS:
1. Read the sprint planning workflow at $BASE_DIR/_bmad/bmm/workflows/4-implementation/sprint-planning/workflow.yaml
2. Read the instructions at $BASE_DIR/_bmad/bmm/workflows/4-implementation/sprint-planning/instructions.md
3. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
4. Use the sprint status template at $BASE_DIR/_bmad/bmm/workflows/4-implementation/sprint-planning/sprint-status-template.yaml
5. Parse the epics document above and extract ALL stories
6. Generate a sprint-status.yaml with all stories set to 'backlog' status
7. Set the planning_artifacts path to: $MVP/planning
8. Set the implementation_artifacts path to: $MVP
9. Save the sprint status to $MVP/sprint-status.yaml
10. Skip ALL interactive prompts — you have all context needed"
      ;;

    stories)
      local STORY_KEY
      STORY_KEY=$(next_story_key "$MVP/sprint-status.yaml" "backlog")

      if [ -z "$STORY_KEY" ]; then
        log "No backlog stories found"
        return 0
      fi

      local EPICS_CONTENT
      EPICS_CONTENT=$(cat "$MVP/planning/epics.md" 2>/dev/null || echo "")
      local ARCH_CONTENT
      ARCH_CONTENT=$(cat "$MVP/planning/architecture.md" 2>/dev/null || echo "")

      TIMEOUT=1200
      PROMPT="You are running an automated BMAD story creation workflow. Do NOT ask questions — complete autonomously.

TARGET STORY: $STORY_KEY

CONTEXT — Epics and Stories:
---
$EPICS_CONTENT
---

CONTEXT — Architecture:
---
$ARCH_CONTENT
---

INSTRUCTIONS:
1. Read the create-story workflow at $BASE_DIR/_bmad/bmm/workflows/4-implementation/create-story/workflow.yaml
2. Read the instructions at $BASE_DIR/_bmad/bmm/workflows/4-implementation/create-story/instructions.xml
3. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
4. Use the story template at $BASE_DIR/_bmad/bmm/workflows/4-implementation/create-story/template.md
5. Create a detailed story file for story '$STORY_KEY' using the epics and architecture context
6. The story must include: story statement, detailed acceptance criteria, tasks/subtasks, and dev notes
7. Set the planning_artifacts path to: $MVP/planning
8. Set the implementation_artifacts path to: $MVP
9. Save the story file to $MVP/stories/${STORY_KEY}.md
10. After creating the story file, update $MVP/sprint-status.yaml to change '$STORY_KEY' status from 'backlog' to 'ready-for-dev'
11. Skip ALL interactive prompts — you have all context needed"
      ;;

    dev)
      local STORY_KEY
      STORY_KEY=$(next_story_key "$MVP/sprint-status.yaml" "ready-for-dev")

      if [ -z "$STORY_KEY" ]; then
        log "No ready-for-dev stories found"
        return 0
      fi

      local STORY_CONTENT
      STORY_CONTENT=$(cat "$MVP/stories/${STORY_KEY}.md" 2>/dev/null || echo "")
      local ARCH_CONTENT
      ARCH_CONTENT=$(cat "$MVP/planning/architecture.md" 2>/dev/null || echo "")

      TOOLS="Read,Write,Glob,Grep,Edit,Bash"
      TIMEOUT=3600
      PROMPT="You are running an automated BMAD dev-story implementation workflow. Do NOT ask questions — implement the story fully and autonomously.

TARGET STORY: $STORY_KEY
PROJECT ROOT: $MVP/src

CONTEXT — Story Specification:
---
$STORY_CONTENT
---

CONTEXT — Architecture:
---
$ARCH_CONTENT
---

INSTRUCTIONS:
1. Read the dev-story workflow at $BASE_DIR/_bmad/bmm/workflows/4-implementation/dev-story/workflow.yaml
2. Read the instructions at $BASE_DIR/_bmad/bmm/workflows/4-implementation/dev-story/instructions.xml
3. Read the config at $BASE_DIR/_bmad/bmm/config.yaml
4. The project source code root is: $MVP/src
5. Set the planning_artifacts path to: $MVP/planning
6. Set the implementation_artifacts path to: $MVP
7. Implement ALL tasks from the story file following the red-green-refactor TDD cycle:
   a. Write a failing test for each acceptance criterion
   b. Write minimal code to make it pass
   c. Refactor for quality
8. If this is the first story (project setup), initialize the project with appropriate tooling:
   - Create package.json (or equivalent for chosen stack)
   - Set up the project structure per the architecture document
   - Install dependencies
9. Run all tests and ensure they pass before marking complete
10. After successful implementation, update $MVP/sprint-status.yaml to change '$STORY_KEY' status from 'ready-for-dev' to 'done'
11. Update the story file at $MVP/stories/${STORY_KEY}.md with:
    - Mark all tasks as [x] complete
    - Add implementation notes to the Dev Agent Record section
    - Add all created/modified files to the File List section
12. Skip ALL interactive prompts, code review steps, and user approval gates — complete autonomously"
      ;;

    done)
      log "All AutoMVP steps complete for $IDEA"
      notify "AutoMVP complete for: $IDEA — MVP code at mvps/$IDEA/src/"
      return 0
      ;;

    *)
      log "Unknown step: $STEP"
      return 1
      ;;
  esac

  # Execute the Claude command
  log "Executing claude -p for step '$STEP' (timeout: ${TIMEOUT}s, tools: $TOOLS)"
  timeout "$TIMEOUT" claude -p "$PROMPT" \
    --allowedTools "$TOOLS" \
    >> "$LOG_DIR/automvp-${IDEA}-${STEP}-${DATE}.log" 2>&1

  EXIT_CODE=$?
  log "AutoMVP step '$STEP' for '$IDEA' finished (exit: $EXIT_CODE)"

  if [ $EXIT_CODE -eq 0 ]; then
    notify "AutoMVP $STEP complete for: $IDEA ($DATE)"
  else
    notify "AutoMVP $STEP FAILED for: $IDEA ($DATE) — exit code $EXIT_CODE"
  fi

  # Auto-commit
  cd "$BASE_DIR"
  git add mvps/ 2>/dev/null || true
  git commit -m "[automvp] $STEP for $IDEA ($DATE)" 2>/dev/null || true
  git push origin main 2>> "$LOG_DIR/cron.log" || true

  return $EXIT_CODE
}

# ─── Main ───

IDEA=$(pick_idea) || exit 0
init_mvp_dir "$IDEA"
STEP=$(next_step "$IDEA")

if [ "$STEP" = "done" ]; then
  log "Idea '$IDEA' already fully processed through AutoMVP"
  exit 0
fi

log "=== AutoMVP Pipeline: $IDEA → step: $STEP ==="

# For loop steps (stories, dev), process up to MAX_STORIES per run
if [ "$STEP" = "stories" ] || [ "$STEP" = "dev" ]; then
  PROCESSED=0
  while [ "$PROCESSED" -lt "$MAX_STORIES" ]; do
    CURRENT_STEP=$(next_step "$IDEA")
    if [ "$CURRENT_STEP" != "$STEP" ]; then
      log "No more '$STEP' to process — next step is '$CURRENT_STEP'"
      break
    fi
    run_step "$IDEA" "$STEP"
    PROCESSED=$((PROCESSED + 1))
    log "Processed $PROCESSED/$MAX_STORIES stories for step '$STEP'"
  done
else
  run_step "$IDEA" "$STEP"
fi

log "=== AutoMVP Pipeline finished ==="
