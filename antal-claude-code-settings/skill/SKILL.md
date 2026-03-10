---
name: sync-settings
description: Sync Claude Code settings (MCP servers, skills, rules, hooks, CLAUDE.md) across machines using a private git repo. Run with push, pull, status, or diff.
allowed-tools: Bash, Read
---

# Sync Settings Skill

This skill syncs Claude Code configuration across devices using a private git repo at `~/dev/antal-claude-code-settings/`.

## What it syncs

- `~/.claude/settings.json` — permissions, hooks config
- `~/.claude/CLAUDE.md` — personal instructions
- `~/.claude/skills/` — custom skills
- `~/.claude/rules/` — path-specific rules
- `~/.claude/agents/` — personal subagents
- `~/.claude/*.sh` — hook scripts
- MCP servers from `~/.claude.json` (tokens are NOT synced)

## How to use

Parse the user's intent from their message. They may say:

- `/sync-settings push` — push local settings to the repo
- `/sync-settings pull` — pull settings from the repo
- `/sync-settings status` — show what's different
- `/sync-settings diff` — preview what would change on pull
- `/sync-settings` (no argument) — show status

## Execution

1. Verify the sync repo exists at `~/dev/antal-claude-code-settings/`:
   ```bash
   ls ~/dev/antal-claude-code-settings/sync.sh
   ```

2. If it doesn't exist, tell the user to clone their settings repo:
   ```
   git clone <your-repo-url> ~/claude-code-settings
   ```

3. Run the appropriate command:
   ```bash
   bash ~/dev/antal-claude-code-settings/sync.sh <command>
   ```
   Where `<command>` is one of: `push`, `pull`, `status`, `diff`, `install`

4. Report the results to the user clearly. If pulling, remind them to restart Claude Code for changes to take effect.

## First-time setup on a new machine

If the user hasn't set up sync yet:
```bash
git clone <repo-url> ~/claude-code-settings
bash ~/dev/antal-claude-code-settings/sync.sh install
```

The install command will detect whether the repo has settings already (pulls them) or not (pushes current local settings).
