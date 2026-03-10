# Claude Code Settings Sync - Setup Guide

Sync your Claude Code settings (MCP servers, skills, rules, hooks, CLAUDE.md) across all your devices using a private git repo.

## What Gets Synced

| Item | Location | Description |
|------|----------|-------------|
| `settings.json` | `~/.claude/` | Permissions, hooks config |
| `CLAUDE.md` | `~/.claude/` | Personal instructions |
| `skills/` | `~/.claude/skills/` | Custom skills |
| `rules/` | `~/.claude/rules/` | Path-specific rules |
| `agents/` | `~/.claude/agents/` | Personal subagents |
| `*.sh` hooks | `~/.claude/` | Hook scripts |
| MCP servers | `~/.claude.json` | Server definitions only (NOT tokens) |

## Quick Setup

### 1. Create a Private GitHub Repo

```bash
# Create a new private repo on GitHub called "antal-claude-code-settings"
# Then initialize locally:
cd ~/dev/antal-claude-code-settings
git remote add origin git@github.com:denagyantal/antal-claude-code-settings.git
git branch -M main
git push -u origin main
```

### 2. First Machine (Push Current Settings)

```bash
cd ~/dev/antal-claude-code-settings
bash sync.sh install
```

This pushes your current settings to the repo and installs the `/sync-settings` skill.

### 3. Additional Machines (Pull Settings)

```bash
git clone git@github.com:denagyantal/antal-claude-code-settings.git ~/dev/antal-claude-code-settings
cd ~/dev/antal-claude-code-settings
bash sync.sh install
```

This pulls settings from the repo and applies them locally.

## Daily Usage

### From the Terminal

```bash
bash ~/dev/antal-claude-code-settings/sync.sh push      # Push local changes
bash ~/dev/antal-claude-code-settings/sync.sh pull      # Pull from repo
bash ~/dev/antal-claude-code-settings/sync.sh status    # Check what's different
bash ~/dev/antal-claude-code-settings/sync.sh diff      # Preview changes
```

### From Claude Code

```
/sync-settings push      # Push settings
/sync-settings pull      # Pull settings
/sync-settings status    # Check status
```

## How MCP Server Sync Works

The tricky part: `~/.claude.json` contains both MCP server definitions AND OAuth tokens. The sync script handles this safely:

- **Push**: Extracts ONLY the `mcpServers` key using `jq`
- **Pull**: Merges MCP servers back WITHOUT touching tokens, feature flags, or other keys

Your OAuth tokens stay local to each machine (as they should).

## Safety

- Every `pull` creates a timestamped backup in `~/.claude/backups/`
- Git history tracks all changes
- Push fails if remote is ahead (prevents overwrites)

## Requirements

- `git` (for version control)
- `jq` (for safe JSON manipulation of `~/.claude.json`)
- `rsync` (for directory sync, pre-installed on macOS/Linux)

Install missing deps:
```bash
# macOS
brew install jq

# Linux
sudo apt install jq
```
