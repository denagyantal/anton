#!/usr/bin/env python3
"""Telegram Personal Coach Bot — powered by Claude API."""

import json
import logging
import os
import time
from pathlib import Path

import anthropic
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    ConversationHandler,
    MessageHandler,
    filters,
)

load_dotenv()

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
TELEGRAM_BOT_TOKEN = os.environ["TELEGRAM_BOT_TOKEN"]
ANTHROPIC_API_KEY = os.environ["ANTHROPIC_API_KEY"]
ALLOWED_USER_IDS = [
    int(uid.strip())
    for uid in os.environ.get("ALLOWED_USER_IDS", "").split(",")
    if uid.strip()
]
CLAUDE_MODEL = os.environ.get("CLAUDE_MODEL", "claude-sonnet-4-20250514")
MAX_HISTORY_MESSAGES = int(os.environ.get("MAX_HISTORY_MESSAGES", "40"))

DATA_DIR = Path(os.environ.get("DATA_DIR", str(Path(__file__).parent / "data")))
DATA_DIR.mkdir(parents=True, exist_ok=True)

logging.basicConfig(
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s", level=logging.INFO
)
log = logging.getLogger("coach-bot")

# ---------------------------------------------------------------------------
# System prompt
# ---------------------------------------------------------------------------
SYSTEM_PROMPT = """\
You are a personal coach named Anton. Your role is to help the user achieve \
their goals through structured support, accountability, and motivation.

## Your approach
- Ask focused questions to understand the user's goals, challenges, and progress.
- Break big goals into small, actionable steps.
- Check in on previous commitments before moving forward.
- Be encouraging but honest — don't just validate, challenge when needed.
- Keep sessions concise and action-oriented.

## At the start of each conversation
1. Greet the user by name.
2. Ask what they want to focus on today OR follow up on a previous goal.
3. Help them define ONE clear next action before ending the session.

## Coaching areas (adapt based on user needs)
- Productivity & habits
- Career & professional growth
- Health & fitness
- Mindset & confidence
- Relationships & communication

## Tone
Warm, direct, and practical. Avoid generic motivational phrases. Ask more \
than you tell. Keep responses concise — this is a Telegram chat, not an essay.

## Memory
You have access to conversation history. Reference past goals and commitments \
to build continuity. When the user sets a goal or makes a commitment, note it \
clearly so you can follow up later.
"""

# ---------------------------------------------------------------------------
# Per-user profile & history persistence
# ---------------------------------------------------------------------------

def _profile_path(user_id: int) -> Path:
    return DATA_DIR / f"profile_{user_id}.json"


def _history_path(user_id: int) -> Path:
    return DATA_DIR / f"history_{user_id}.json"


def load_profile(user_id: int) -> dict:
    p = _profile_path(user_id)
    if p.exists():
        return json.loads(p.read_text())
    return {}


def save_profile(user_id: int, profile: dict) -> None:
    _profile_path(user_id).write_text(json.dumps(profile, indent=2))


def load_history(user_id: int) -> list[dict]:
    p = _history_path(user_id)
    if p.exists():
        return json.loads(p.read_text())
    return []


def save_history(user_id: int, history: list[dict]) -> None:
    # Keep only recent messages to stay within context limits
    trimmed = history[-MAX_HISTORY_MESSAGES:]
    _history_path(user_id).write_text(json.dumps(trimmed, indent=2))


# ---------------------------------------------------------------------------
# Claude API
# ---------------------------------------------------------------------------
client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)


def build_system_prompt(user_id: int) -> str:
    profile = load_profile(user_id)
    parts = [SYSTEM_PROMPT]
    if profile.get("name"):
        parts.append(f"\nThe user's name is: {profile['name']}")
    if profile.get("focus"):
        parts.append(f"Their main focus area is: {profile['focus']}")
    if profile.get("goals"):
        parts.append(f"Their current goals: {profile['goals']}")
    return "\n".join(parts)


def ask_claude(user_id: int, user_message: str) -> str:
    history = load_history(user_id)
    history.append({"role": "user", "content": user_message})

    try:
        response = client.messages.create(
            model=CLAUDE_MODEL,
            max_tokens=1024,
            system=build_system_prompt(user_id),
            messages=history,
        )
        assistant_text = response.content[0].text
    except anthropic.APIError as e:
        log.error("Claude API error: %s", e)
        assistant_text = "Sorry, I'm having trouble connecting right now. Try again in a moment."
        # Don't save the failed exchange
        return assistant_text

    history.append({"role": "assistant", "content": assistant_text})
    save_history(user_id, history)
    return assistant_text


# ---------------------------------------------------------------------------
# Access control
# ---------------------------------------------------------------------------

def is_allowed(user_id: int) -> bool:
    if not ALLOWED_USER_IDS:
        return True  # No allowlist = open to all
    return user_id in ALLOWED_USER_IDS


# ---------------------------------------------------------------------------
# Telegram handlers
# ---------------------------------------------------------------------------

# Onboarding conversation states
NAME, FOCUS = range(2)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user_id = update.effective_user.id
    if not is_allowed(user_id):
        await update.message.reply_text("Sorry, this bot is private.")
        return ConversationHandler.END

    profile = load_profile(user_id)
    if profile.get("name"):
        await update.message.reply_text(
            f"Welcome back, {profile['name']}! What would you like to work on today?"
        )
        return ConversationHandler.END

    await update.message.reply_text(
        "Hey! I'm Anton, your personal coach. Let's get set up.\n\n"
        "What's your name?"
    )
    return NAME


async def onboard_name(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user_id = update.effective_user.id
    name = update.message.text.strip()
    profile = load_profile(user_id)
    profile["name"] = name
    save_profile(user_id, profile)

    await update.message.reply_text(
        f"Nice to meet you, {name}! What's the main area you'd like to focus on?\n\n"
        "Examples: fitness, career, productivity, mindset, relationships"
    )
    return FOCUS


async def onboard_focus(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user_id = update.effective_user.id
    focus = update.message.text.strip()
    profile = load_profile(user_id)
    profile["focus"] = focus
    profile["onboarded_at"] = time.strftime("%Y-%m-%d %H:%M:%S")
    save_profile(user_id, profile)

    # Kick off the first coaching exchange
    reply = ask_claude(
        user_id,
        f"I just set up the bot. My name is {profile['name']} and I want to focus on: {focus}. "
        "This is our first session — help me get started.",
    )
    await update.message.reply_text(reply)
    return ConversationHandler.END


async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    await update.message.reply_text("Setup cancelled. Send /start anytime to begin.")
    return ConversationHandler.END


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_id = update.effective_user.id
    if not is_allowed(user_id):
        return

    profile = load_profile(user_id)
    if not profile.get("name"):
        await update.message.reply_text("Let's get set up first! Send /start")
        return

    reply = ask_claude(user_id, update.message.text)
    await update.message.reply_text(reply)


async def set_goal(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Usage: /goal <your goal description>"""
    user_id = update.effective_user.id
    if not is_allowed(user_id):
        return

    text = update.message.text.replace("/goal", "", 1).strip()
    if not text:
        await update.message.reply_text("Usage: /goal <describe your goal>")
        return

    profile = load_profile(user_id)
    profile["goals"] = text
    save_profile(user_id, profile)

    reply = ask_claude(user_id, f"I just updated my main goal to: {text}. Help me break this down.")
    await update.message.reply_text(reply)


async def set_focus(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Usage: /focus <area>"""
    user_id = update.effective_user.id
    if not is_allowed(user_id):
        return

    text = update.message.text.replace("/focus", "", 1).strip()
    if not text:
        await update.message.reply_text("Usage: /focus <area like fitness, career, productivity>")
        return

    profile = load_profile(user_id)
    profile["focus"] = text
    save_profile(user_id, profile)
    await update.message.reply_text(f"Focus updated to: {text}")


async def reset(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Clear conversation history (profile is kept)."""
    user_id = update.effective_user.id
    if not is_allowed(user_id):
        return

    save_history(user_id, [])
    await update.message.reply_text("Conversation history cleared. Fresh start!")


async def status(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Show current profile and goal."""
    user_id = update.effective_user.id
    if not is_allowed(user_id):
        return

    profile = load_profile(user_id)
    history = load_history(user_id)
    lines = [
        f"Name: {profile.get('name', 'Not set')}",
        f"Focus: {profile.get('focus', 'Not set')}",
        f"Goal: {profile.get('goals', 'Not set')}",
        f"Messages in history: {len(history)}",
    ]
    await update.message.reply_text("\n".join(lines))


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    app = Application.builder().token(TELEGRAM_BOT_TOKEN).build()

    # Onboarding conversation
    onboard_handler = ConversationHandler(
        entry_points=[CommandHandler("start", start)],
        states={
            NAME: [MessageHandler(filters.TEXT & ~filters.COMMAND, onboard_name)],
            FOCUS: [MessageHandler(filters.TEXT & ~filters.COMMAND, onboard_focus)],
        },
        fallbacks=[CommandHandler("cancel", cancel)],
    )

    app.add_handler(onboard_handler)
    app.add_handler(CommandHandler("goal", set_goal))
    app.add_handler(CommandHandler("focus", set_focus))
    app.add_handler(CommandHandler("reset", reset))
    app.add_handler(CommandHandler("status", status))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    log.info("Coach bot starting…")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
