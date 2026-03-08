#!/usr/bin/env bash
set -euo pipefail

# Claude Code Settings Sync
# Syncs ~/.claude/ settings across machines via a private git repo.
# Requires: git, jq

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$SCRIPT_DIR"
CLAUDE_DIR="$HOME/.claude"
CLAUDE_JSON="$HOME/.claude.json"
SETTINGS_DIR="$REPO_DIR/settings"
BACKUP_DIR="$CLAUDE_DIR/backups"

# Files/dirs to sync from ~/.claude/
SYNC_FILES=(settings.json CLAUDE.md)
SYNC_DIRS=(skills rules agents)
SYNC_SCRIPTS=() # populated dynamically from *.sh in ~/.claude/

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()  { echo -e "${GREEN}[sync]${NC} $*"; }
warn() { echo -e "${YELLOW}[warn]${NC} $*"; }
err()  { echo -e "${RED}[error]${NC} $*" >&2; }

check_deps() {
    local missing=()
    for cmd in git jq; do
        command -v "$cmd" &>/dev/null || missing+=("$cmd")
    done
    if [[ ${#missing[@]} -gt 0 ]]; then
        err "Missing dependencies: ${missing[*]}"
        echo "Install with:"
        echo "  macOS:  brew install ${missing[*]}"
        echo "  Linux:  sudo apt install ${missing[*]}"
        exit 1
    fi
}

find_hook_scripts() {
    SYNC_SCRIPTS=()
    if [[ -d "$CLAUDE_DIR" ]]; then
        while IFS= read -r -d '' f; do
            SYNC_SCRIPTS+=("$(basename "$f")")
        done < <(find "$CLAUDE_DIR" -maxdepth 1 -name '*.sh' -print0 2>/dev/null)
    fi
}

backup_local() {
    local ts
    ts="$(date +%Y%m%d-%H%M%S)"
    local bdir="$BACKUP_DIR/$ts"
    mkdir -p "$bdir"

    for f in "${SYNC_FILES[@]}"; do
        [[ -f "$CLAUDE_DIR/$f" ]] && cp "$CLAUDE_DIR/$f" "$bdir/"
    done
    for d in "${SYNC_DIRS[@]}"; do
        [[ -d "$CLAUDE_DIR/$d" ]] && cp -r "$CLAUDE_DIR/$d" "$bdir/"
    done
    find_hook_scripts
    for f in "${SYNC_SCRIPTS[@]}"; do
        [[ -f "$CLAUDE_DIR/$f" ]] && cp "$CLAUDE_DIR/$f" "$bdir/"
    done
    [[ -f "$CLAUDE_JSON" ]] && cp "$CLAUDE_JSON" "$bdir/claude.json.bak"

    log "Backup saved to $bdir"
}

cmd_push() {
    log "Pushing local settings to repo..."
    check_deps
    find_hook_scripts
    mkdir -p "$SETTINGS_DIR/claude"

    # Copy files
    for f in "${SYNC_FILES[@]}"; do
        if [[ -f "$CLAUDE_DIR/$f" ]]; then
            cp "$CLAUDE_DIR/$f" "$SETTINGS_DIR/claude/$f"
            log "  copied $f"
        fi
    done

    # Copy directories
    for d in "${SYNC_DIRS[@]}"; do
        if [[ -d "$CLAUDE_DIR/$d" ]]; then
            mkdir -p "$SETTINGS_DIR/claude/$d"
            rsync -a --delete "$CLAUDE_DIR/$d/" "$SETTINGS_DIR/claude/$d/"
            log "  synced $d/"
        fi
    done

    # Copy hook scripts
    for f in "${SYNC_SCRIPTS[@]}"; do
        if [[ -f "$CLAUDE_DIR/$f" ]]; then
            cp "$CLAUDE_DIR/$f" "$SETTINGS_DIR/claude/$f"
            log "  copied $f"
        fi
    done

    # Extract MCP servers from ~/.claude.json (NOT tokens/flags)
    if [[ -f "$CLAUDE_JSON" ]]; then
        jq '{mcpServers: (.mcpServers // {})}' "$CLAUDE_JSON" > "$SETTINGS_DIR/mcp-servers.json"
        local count
        count=$(jq '.mcpServers | length' "$SETTINGS_DIR/mcp-servers.json")
        log "  extracted $count MCP server(s)"
    fi

    # Git commit and push
    cd "$REPO_DIR"
    git add -A
    if git diff --cached --quiet; then
        log "No changes to push."
    else
        git commit -m "sync: push from $(hostname) $(date -Iseconds)"
        git push
        log "Pushed successfully."
    fi
}

cmd_pull() {
    log "Pulling settings from repo..."
    check_deps

    # Git pull latest
    cd "$REPO_DIR"
    git pull --ff-only || { warn "Fast-forward pull failed. You may need to resolve conflicts."; git pull; }

    # Backup before overwriting
    backup_local

    mkdir -p "$CLAUDE_DIR"

    # Copy files
    for f in "${SYNC_FILES[@]}"; do
        if [[ -f "$SETTINGS_DIR/claude/$f" ]]; then
            cp "$SETTINGS_DIR/claude/$f" "$CLAUDE_DIR/$f"
            log "  restored $f"
        fi
    done

    # Copy directories
    for d in "${SYNC_DIRS[@]}"; do
        if [[ -d "$SETTINGS_DIR/claude/$d" ]]; then
            mkdir -p "$CLAUDE_DIR/$d"
            rsync -a --delete "$SETTINGS_DIR/claude/$d/" "$CLAUDE_DIR/$d/"
            log "  restored $d/"
        fi
    done

    # Copy hook scripts
    if compgen -G "$SETTINGS_DIR/claude/*.sh" > /dev/null 2>&1; then
        for f in "$SETTINGS_DIR"/claude/*.sh; do
            local name
            name="$(basename "$f")"
            cp "$f" "$CLAUDE_DIR/$name"
            chmod +x "$CLAUDE_DIR/$name"
            log "  restored $name"
        done
    fi

    # Merge MCP servers into ~/.claude.json (preserve tokens and other keys)
    if [[ -f "$SETTINGS_DIR/mcp-servers.json" ]]; then
        if [[ -f "$CLAUDE_JSON" ]]; then
            local tmp
            tmp=$(mktemp)
            jq -s '.[0] * {mcpServers: .[1].mcpServers}' "$CLAUDE_JSON" "$SETTINGS_DIR/mcp-servers.json" > "$tmp"
            mv "$tmp" "$CLAUDE_JSON"
        else
            cp "$SETTINGS_DIR/mcp-servers.json" "$CLAUDE_JSON"
        fi
        log "  merged MCP servers"
    fi

    log "Pull complete. Restart Claude Code to pick up changes."
}

cmd_status() {
    check_deps
    find_hook_scripts

    echo -e "${BLUE}=== Claude Code Settings Sync Status ===${NC}"
    echo ""

    # Check git status
    cd "$REPO_DIR"
    local branch
    branch=$(git branch --show-current 2>/dev/null || echo "unknown")
    echo -e "Repo:    $REPO_DIR"
    echo -e "Branch:  $branch"

    local remote_status
    git fetch origin "$branch" --quiet 2>/dev/null || true
    local ahead behind
    ahead=$(git rev-list "origin/$branch..$branch" --count 2>/dev/null || echo "?")
    behind=$(git rev-list "$branch..origin/$branch" --count 2>/dev/null || echo "?")
    echo -e "Ahead:   $ahead commit(s)"
    echo -e "Behind:  $behind commit(s)"
    echo ""

    # Check file differences
    echo -e "${BLUE}--- File Comparison ---${NC}"
    local has_diff=false

    for f in "${SYNC_FILES[@]}"; do
        local local_f="$CLAUDE_DIR/$f"
        local repo_f="$SETTINGS_DIR/claude/$f"
        if [[ -f "$local_f" && -f "$repo_f" ]]; then
            if ! diff -q "$local_f" "$repo_f" &>/dev/null; then
                echo -e "  ${YELLOW}CHANGED${NC}  $f"
                has_diff=true
            else
                echo -e "  ${GREEN}OK${NC}       $f"
            fi
        elif [[ -f "$local_f" ]]; then
            echo -e "  ${YELLOW}LOCAL ONLY${NC}  $f"
            has_diff=true
        elif [[ -f "$repo_f" ]]; then
            echo -e "  ${YELLOW}REPO ONLY${NC}   $f"
            has_diff=true
        fi
    done

    for d in "${SYNC_DIRS[@]}"; do
        if [[ -d "$CLAUDE_DIR/$d" || -d "$SETTINGS_DIR/claude/$d" ]]; then
            local changes
            changes=$(diff -rq "$CLAUDE_DIR/$d" "$SETTINGS_DIR/claude/$d" 2>/dev/null | head -5 || true)
            if [[ -n "$changes" ]]; then
                echo -e "  ${YELLOW}CHANGED${NC}  $d/"
                has_diff=true
            elif [[ -d "$CLAUDE_DIR/$d" ]]; then
                echo -e "  ${GREEN}OK${NC}       $d/"
            fi
        fi
    done

    # Check MCP servers
    if [[ -f "$CLAUDE_JSON" && -f "$SETTINGS_DIR/mcp-servers.json" ]]; then
        local local_mcp repo_mcp
        local_mcp=$(jq -S '{mcpServers: (.mcpServers // {})}' "$CLAUDE_JSON" 2>/dev/null)
        repo_mcp=$(jq -S '.' "$SETTINGS_DIR/mcp-servers.json" 2>/dev/null)
        if [[ "$local_mcp" != "$repo_mcp" ]]; then
            echo -e "  ${YELLOW}CHANGED${NC}  MCP servers"
            has_diff=true
        else
            echo -e "  ${GREEN}OK${NC}       MCP servers"
        fi
    fi

    echo ""
    if $has_diff; then
        echo -e "${YELLOW}Settings are out of sync. Run 'sync.sh push' or 'sync.sh pull'.${NC}"
    else
        echo -e "${GREEN}All settings are in sync.${NC}"
    fi
}

cmd_diff() {
    check_deps
    find_hook_scripts

    echo -e "${BLUE}=== What would change on pull ===${NC}"
    echo ""

    cd "$REPO_DIR"
    git fetch origin --quiet 2>/dev/null || true

    for f in "${SYNC_FILES[@]}"; do
        local local_f="$CLAUDE_DIR/$f"
        local repo_f="$SETTINGS_DIR/claude/$f"
        if [[ -f "$local_f" && -f "$repo_f" ]]; then
            local d
            d=$(diff -u "$local_f" "$repo_f" 2>/dev/null || true)
            if [[ -n "$d" ]]; then
                echo -e "${YELLOW}--- $f ---${NC}"
                echo "$d"
                echo ""
            fi
        fi
    done

    for dir in "${SYNC_DIRS[@]}"; do
        if [[ -d "$CLAUDE_DIR/$dir" && -d "$SETTINGS_DIR/claude/$dir" ]]; then
            local d
            d=$(diff -ru "$CLAUDE_DIR/$dir" "$SETTINGS_DIR/claude/$dir" 2>/dev/null || true)
            if [[ -n "$d" ]]; then
                echo -e "${YELLOW}--- $dir/ ---${NC}"
                echo "$d"
                echo ""
            fi
        fi
    done

    if [[ -f "$CLAUDE_JSON" && -f "$SETTINGS_DIR/mcp-servers.json" ]]; then
        local local_mcp repo_mcp
        local_mcp=$(jq -S '{mcpServers: (.mcpServers // {})}' "$CLAUDE_JSON" 2>/dev/null)
        repo_mcp=$(jq -S '.' "$SETTINGS_DIR/mcp-servers.json" 2>/dev/null)
        if [[ "$local_mcp" != "$repo_mcp" ]]; then
            echo -e "${YELLOW}--- MCP servers ---${NC}"
            diff <(echo "$local_mcp") <(echo "$repo_mcp") || true
            echo ""
        fi
    fi
}

cmd_install() {
    log "Setting up Claude Code Settings Sync..."
    check_deps

    mkdir -p "$CLAUDE_DIR"
    mkdir -p "$SETTINGS_DIR/claude"

    # Check if this is a fresh clone (has settings/) or first-time setup
    if [[ -d "$SETTINGS_DIR/claude" ]] && compgen -G "$SETTINGS_DIR/claude/*" > /dev/null 2>&1; then
        log "Found existing settings in repo. Pulling to local..."
        cmd_pull
    else
        log "No settings in repo yet. Pushing current local settings..."
        cmd_push
    fi

    # Install the sync-settings skill
    if [[ -d "$REPO_DIR/skill" ]]; then
        mkdir -p "$CLAUDE_DIR/skills/sync-settings"
        cp "$REPO_DIR/skill/SKILL.md" "$CLAUDE_DIR/skills/sync-settings/SKILL.md"
        log "Installed /sync-settings skill"
    fi

    log ""
    log "Setup complete! Usage:"
    log "  bash $SCRIPT_DIR/sync.sh push    # Push settings to repo"
    log "  bash $SCRIPT_DIR/sync.sh pull    # Pull settings from repo"
    log "  bash $SCRIPT_DIR/sync.sh status  # Check sync status"
    log "  /sync-settings                   # Use from Claude Code"
}

# --- Main ---

case "${1:-help}" in
    push)    cmd_push ;;
    pull)    cmd_pull ;;
    status)  cmd_status ;;
    diff)    cmd_diff ;;
    install) cmd_install ;;
    help|--help|-h)
        echo "Claude Code Settings Sync"
        echo ""
        echo "Usage: sync.sh <command>"
        echo ""
        echo "Commands:"
        echo "  install   First-time setup (push or pull depending on state)"
        echo "  push      Push local ~/.claude/ settings to this repo"
        echo "  pull      Pull settings from this repo to local ~/.claude/"
        echo "  status    Show sync status and differences"
        echo "  diff      Preview what would change on pull"
        echo "  help      Show this help"
        echo ""
        echo "Files synced:"
        echo "  ~/.claude/settings.json    Permissions, hooks config"
        echo "  ~/.claude/CLAUDE.md        Personal instructions"
        echo "  ~/.claude/skills/          Custom skills"
        echo "  ~/.claude/rules/           Path-specific rules"
        echo "  ~/.claude/agents/          Personal subagents"
        echo "  ~/.claude/*.sh             Hook scripts"
        echo "  ~/.claude.json mcpServers  MCP server definitions (tokens excluded)"
        ;;
    *)
        err "Unknown command: $1"
        echo "Run 'sync.sh help' for usage."
        exit 1
        ;;
esac
