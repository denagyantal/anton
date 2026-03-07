#!/bin/bash
# dedup-shortlisted.sh — Identifies and merges duplicate shortlisted ideas
# Run manually: bash dedup-shortlisted.sh [--dry-run | --merge]

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
SHORTLISTED="$BASE_DIR/ideas/shortlisted"
MODE="${1:---dry-run}"

echo "=== Shortlisted Idea Dedup Tool ==="
echo "Mode: $MODE"
echo ""

ALL_FILES=$(ls "$SHORTLISTED"/*.md 2>/dev/null | xargs -I{} basename {} || true)

process_group() {
  local CANONICAL="$1"
  local PATTERN="$2"

  MATCHES=$(echo "$ALL_FILES" | grep -i "$PATTERN" || true)
  COUNT=$(echo "$MATCHES" | grep -c . 2>/dev/null || echo "0")

  if [ "$COUNT" -gt 1 ]; then
    echo "GROUP: $CANONICAL.md ($COUNT files)"
    echo "$MATCHES" | while read -r f; do
      [ -z "$f" ] && continue
      SCORE=$(head -5 "$SHORTLISTED/$f" | grep -oE '[0-9]+/105' | head -1 || echo "?/105")
      echo "  - $f ($SCORE)"
    done

    if [ "$MODE" = "--merge" ]; then
      BEST_FILE=""
      BEST_SCORE=0
      while read -r f; do
        [ -z "$f" ] && continue
        SCORE=$(head -5 "$SHORTLISTED/$f" | grep -oE '[0-9]+' | head -1 || echo "0")
        if [ "${SCORE:-0}" -gt "$BEST_SCORE" ]; then
          BEST_SCORE=$SCORE
          BEST_FILE=$f
        fi
      done <<< "$MATCHES"

      if [ -n "$BEST_FILE" ]; then
        if [ "$BEST_FILE" != "${CANONICAL}.md" ] && [ -f "$SHORTLISTED/$BEST_FILE" ]; then
          echo "  -> Keeping $BEST_FILE (score: $BEST_SCORE), renaming to ${CANONICAL}.md"
          mv "$SHORTLISTED/$BEST_FILE" "$SHORTLISTED/${CANONICAL}.md"
        fi

        while read -r f; do
          [ -z "$f" ] && continue
          if [ "$f" != "$BEST_FILE" ] && [ "$f" != "${CANONICAL}.md" ] && [ -f "$SHORTLISTED/$f" ]; then
            echo "  -> Removing duplicate: $f"
            rm "$SHORTLISTED/$f"
          fi
        done <<< "$MATCHES"
      fi
    fi
    echo ""
  fi
}

process_group "field-service-management"    'field-service\|fsm\|trades-dispatch'
process_group "cleaning-service-management" 'cleaning'
process_group "landscaping-lawn-care"       'landscap\|lawn-care\|lawn.care'
process_group "contractor-quoting-estimation" 'contractor.*quot\|contractor.*estimat\|contractor.*bid'
process_group "property-management"         'property-manage\|landlord'
process_group "pressure-washing-detailing"  'pressure-wash\|auto-detail\|detailing'
process_group "salon-barbershop"            'salon\|barbershop'
process_group "dental-practice"             'dental'
process_group "pest-control"                'pest-control'
process_group "restaurant-operations"       'restaurant'
process_group "ai-receptionist"             'ai-receptionist'
process_group "review-reputation"           'review.*reputation\|reputation.*review\|testimonial'
process_group "construction-management"     'construction'
process_group "tax-professional"            'tax-pro\|tax.*professional'
process_group "veterinary-practice"         'vet.*practice\|veterinary'
process_group "bookkeeping-accounting"      'bookkeep\|quickbooks'

TOTAL=$(ls "$SHORTLISTED"/*.md 2>/dev/null | wc -l | tr -d ' ')
echo "Total shortlisted files: $TOTAL"
if [ "$MODE" = "--dry-run" ]; then
  echo ""
  echo "Run with --merge to consolidate duplicates."
fi
