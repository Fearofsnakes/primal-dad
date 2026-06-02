# Primal Dad — Recomp Tracker

Gamified personal fitness tracker built around a 12-week recomposition program. JSON-state, Claude Code as the coach, single mobile-friendly `index.html` for daily logging.

**Private repo. Personal use only.**

## What's inside

```
primal-dad/
├── CLAUDE.md           # Source of truth — XP rules, dimensions, check-in flow
├── index.html      # Open in browser (mobile or desktop) for daily logging
├── data/
│   ├── profile.json
│   ├── program/        # 12-week recomp program + lift log + nutrition + body measurements
│   ├── computed/       # current stats, quests, achievements, timeline
│   ├── history/        # weekly check-in dumps
│   ├── watch-imports/  # Garmin CSV drop folder
│   └── archive/v1/     # Pre-revamp 7-dim history
└── ralph/              # Sunday auto-trigger (ralph-loop)
```

## 4 Dimensions
- **STR** — Strength (lifting, progressive overload)
- **CON** — Conditioning (heavy bag, bike, run, rope, Zone 2, recovery)
- **FLX** — Flexibility (mobility, stretching)
- **NUT** — Nutrition (macro adherence, calorie discipline)

## Daily flow
1. Open `index.html` on phone
2. Tap to log today's session, mobility, cardio, or macros
3. Saves to localStorage

## Weekly flow (Sundays)
- Run "weekly check-in" or "primal dad" in Claude Code from this folder
- Claude reads localStorage + JSON, walks the 4 dims, awards XP, checks achievements, runs the calorie adjustment loop, writes back

## Program
- **Start:** 2026-04-27
- **Week 6 milestone:** 2026-W23 (mid-program review)
- **End:** 2026-07-19
- **Then:** path-pick — Lean Cut / Lean Bulk / Strength Block / Maintain
