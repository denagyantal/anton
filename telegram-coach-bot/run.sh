#!/bin/bash
# run.sh — Start the Telegram coach bot
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

# Create venv if missing
if [ ! -d "venv" ]; then
  echo "Creating virtual environment…"
  python3 -m venv venv
fi

source venv/bin/activate

# Install/upgrade deps
pip install -q -r requirements.txt

# Load .env
if [ -f .env ]; then
  set -a; source .env; set +a
elif [ -f ../.env ]; then
  set -a; source ../.env; set +a
else
  echo "ERROR: No .env file found. Copy .env.example to .env and fill in your tokens."
  exit 1
fi

echo "Starting coach bot…"
python bot.py
