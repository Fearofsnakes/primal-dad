# Primal Dad — Recomp Tracker

## What This Is
A gamified fitness tracker built around a **12-week recomposition program**. Lift, condition, stretch, eat — log it, level up, hit milestones. Goal: be a strong, lean, mobile, well-fed dad. Longevity over peak.

## Architecture
- **JSON files in `data/`** — all state, git-versioned
- **Claude Code is the coach** — weekly check-ins are conversations, voice notes welcome (Wispr → paste)
- **`index.html`** (formerly `dashboard.html`) — mobile-friendly visual character sheet, deployed on Vercel
- **No Supabase, no backend** — local files only
- **`ralph/`** — Sunday auto-trigger for weekly check-in

## Quick Commands
- **"weekly check-in"** or **"primal dad"** → run the Sunday flow
- **"log session"** → log today's programmed workout (weight × reps per exercise)
- **"log nutrition"** → log today's macros
- **"log mobility"** → log a flexibility session
- **"pick quests"** → weekly quest pickup for the 4 dimensions
- **"show stats"** → verbal summary of current state
- **"show program"** → today's prescribed session
- **"week 6 milestone"** → triggers mid-program review (auto on W23)
- **"path pick"** → only after Week 12 — choose next program

---

## The Program: 12-Week Recomp

**Start:** 2026-04-27 (Monday, ISO W18)
**End:** 2026-07-19 (ISO W29, Week 12)
**Mid milestone:** 2026-W23 (Week 6 — coincides with BJJ start)
**Goal:** Lose fat + gain muscle simultaneously. Intermediate trainee, ~165 lbs start.

### Schedule
| Day | Session | Dim |
|-----|---------|-----|
| Mon | Upper A — Push | STR |
| Tue | Lower A — Quads | STR |
| Wed | Conditioning (boxing/run/bike/rope, 30–45 min) | CON |
| Thu | Upper B — Pull | STR |
| Fri | Lower B — Hinge/Glutes | STR |
| Sat | Optional cardio or rest | CON |
| Sun | Rest + check-in | — |

Full program detail lives in `data/program/recomp-12wk.json`.

### Progressive Overload
- Hit top of rep range × 3 sets → +5 lbs next session (+2.5 lbs accessories)
- No progress 2+ weeks on a lift → deload 10%, rebuild
- Logged in `data/program/lift-log.json`

### Nutrition Targets
- **2,200 kcal** / **166g protein** / **65g fat (floor)** / **~230g carbs**
- 1 flex meal/week max (not a flex day)
- Cardio day: +200–300 kcal in carbs
- Adjustment loop runs weekly — see check-in flow

### Body Measurements
- Bi-weekly (W0/2/4/6/8/10/12), morning, fasted, post-bathroom, same conditions
- Logged in `data/program/body-measurements.json`
- Get a new InBody scan at Week 12

---

## 4 Dimensions

| Code | Name | Color | Weekly Cap | What It Tracks |
|------|------|-------|------------|----------------|
| **STR** | Strength | `#FF4444` | 80 | Programmed lifts, progressive overload, PRs |
| **CON** | Conditioning | `#4488FF` | 70 | Boxing, cardio, BJJ, Zone 2, sleep, RHR, recovery |
| **FLX** | Flexibility | `#44DD88` | 60 | Daily 15-min mobility, stretch, yoga |
| **NUT** | Nutrition | `#FFCC00` | 70 | Macro adherence, calorie target, flex meal discipline |

### XP Actions

#### STR — cap 80
| Action | XP |
|--------|-----|
| Programmed lift session completed (Upper A/B, Lower A/B) | 25 |
| Progressive overload hit (weight or reps up vs last week) | 10 bonus |
| Plateau-deload session (per protocol) | 15 |
| Optional accessory work | 5 |

#### CON — cap 70
| Action | XP |
|--------|-----|
| Heavy bag session (15+ min) | 20 |
| Run / bike / jump rope (30+ min) | 20 |
| Zone 2 sustained (45+ min) | 25 |
| BJJ class (after 2026-06-02) | 25 |
| BJJ open mat / sparring | 20 |
| Sleep 7+ hr avg for the week (Garmin) | 15 |
| Resting HR improved vs prior week | 10 bonus |
| Watched instructional / studied technique | 5 |

#### FLX — cap 60
| Action | XP |
|--------|-----|
| 15-min daily mobility routine | 10 |
| Dedicated stretch session (15+ min) | 15 |
| Yoga or flow session | 20 |
| Post-workout stretching (5+ min) | 5 |
| Hip opener / BJJ-specific mobility | 10 |

#### NUT — cap 70
| Action | XP |
|--------|-----|
| Hit protein target (≥150g) for the day | 5 (× up to 7 days = 35) |
| Hit calorie target (2,200 ± 200) for the day | 3 (× up to 7 days = 21) |
| Tracked all meals 7/7 days | 15 bonus |
| Stayed within 1 flex meal/week | 10 bonus |
| Full week within ±5% calorie target | 25 bonus |

---

## Leveling

| Level | Title | Cumulative XP | XP to Next |
|-------|-------|---------------|------------|
| 1 | Novice | 0 | 100 |
| 2 | Apprentice | 100 | 150 |
| 3 | Journeyman | 250 | 200 |
| 4 | Adept | 450 | 300 |
| 5 | Expert | 750 | 400 |
| 6 | Master | 1150 | 500 |
| 7 | Grandmaster | 1650 | 650 |
| 8 | Legend | 2300 | 800 |
| 9 | Mythic | 3100 | 1000 |
| 10 | Primal | 4100 | -- |

**Overall Primal Dad Level** = average of the 4 dimension levels (rounded down).

### Overall Titles
| Level | Title |
|-------|-------|
| 1 | Sleep-Deprived Recruit |
| 2 | Diaper Warrior |
| 3 | Iron Father |
| 4 | Tactical Dad |
| 5 | Primal Contender |
| 6 | Apex Father |
| 7 | Grandmaster Dad |
| 8 | Legendary Patriarch |
| 9 | Mythic Protector |
| 10 | The Primal Dad |

### Streak Multiplier
| Consecutive Weeks | Multiplier |
|-------------------|------------|
| 1–2 | 1.0× |
| 3–4 | 1.1× |
| 5–8 | 1.2× |
| 9–12 | 1.3× |
| 13+ | 1.5× |

Missing a week resets streak to 0.

---

## Quests + Achievements (two layers)

**Quests** = active picks each week. 2–4 dimensions, 2–3 quests each. Lives in `data/computed/active-quests.json` and the dashboard. Frame the week.

**Achievements** = passive unlocks. Catalog in `data/computed/achievements.json`. Tiers:
- **Foundation** — Day 1 Done, First Week Logged, Body Comp Baseline
- **Strength** — First Plate, Bodyweight Bench, 100kg Squat, 1.5×BW RDL, Pull-Up Pro, First Bulgarian
- **Consistency** — Mobility Streak 7/14/30, Consistency Block 4w
- **Nutrition** — Macro Marksman 7/30, Calorie Compass, Disciplined Week
- **Conditioning** — Boxing Builder, Zone 2 Long, Heart of Iron, BJJ Day 1
- **Milestone** — Recomp Mid (W6), Recomp Champion (W12), Sub-20% BF
- **Path** — unlocked when a Week 12 path is selected

Auto-unlock criteria types:
- `lift_pr` — auto from `lift-log.json`
- `streak` — auto from logs
- `milestone` — auto on program week
- `manual` — Claude unlocks during check-in

---

## Daily Logging Workflow

### Mobile (preferred for in-the-moment logging)
1. Open the deployed Vercel URL on phone (root serves `index.html`)
2. Tap session card → enter weight × reps for each exercise
3. Tap quest pips to mark completion
4. Tap mobility / nutrition quick-log buttons
5. Data saves to `localStorage` and syncs to JSON during the next Claude Code session

### Voice (Wispr → Claude Code)
- Drop a voice note transcript into Claude Code
- Claude parses and writes to the right JSON files
- Example: *"Logged Monday Upper A — bench 135 for 8 8 7, incline 50s for 10 10 10, lateral 20s for 12 12 12, face pulls bands all 3 sets of 10"*

### Desktop (deep update)
- Run "weekly check-in" in Claude Code on Sunday
- Walks all 4 dimensions, calculates XP, updates everything

---

## Weekly Check-In Flow

When Gab says "weekly check-in" or "primal dad":

### 1. Load State
- Read `data/computed/current-stats.json`, `active-quests.json`, `achievements.json`
- Read `data/program/lift-log.json` for this week's sessions
- Read `data/program/nutrition-log.json` for the week's days
- Check `data/watch-imports/` for new Garmin CSV (RHR, sleep, Zone 2)

### 2. Conversation
Walk dimensions in order. Quests first if active.
- **STR** — Did you complete the 4 programmed lifts? Any progressive overload? Any stalls (flag deload if 2nd consecutive stall)?
- **CON** — Boxing/cardio sessions? Sleep avg? RHR vs last week?
- **FLX** — Mobility days this week? Streak still alive?
- **NUT** — Daily macro adherence? Calorie avg? Flex meals used?

### 3. Calculate
- Apply weekly caps
- Apply streak multiplier
- Check for level-ups
- Check achievements (auto-unlock from logs; manual prompts where needed)

### 4. Calorie Adjustment Loop
Compare week's avg calories to 2,200 target:
- Weight stable + on target → maintain
- Lost 0.5+ lbs/week → maintain (recomp working)
- Gained weight + over target → suggest -100 kcal next week
- Lost too fast (>1 lb/wk) + under target → suggest +100 kcal next week
- Hit weekly avg far off target with no weight change → tighten tracking

### 5. Write
- `data/history/YYYY-WXX.json` (full week summary)
- `data/computed/current-stats.json` (updated XP/levels)
- `data/computed/timeline.json` (append event)
- `data/computed/achievements.json` (any new unlocks)
- `data/computed/active-quests.json` (carry forward or reset)
- Update inline state in `index.html` if needed

### 6. Summary
Verbal recap: overall level, level-ups, streak, weakest dim, biggest win, calorie call, next-week focus.

---

## Week 6 Milestone (auto-trigger on W23)

When current ISO week == `2026-W23`, run this longer ritual:
1. Body measurements review — delta vs Week 0
2. Lift trend chart — top set per movement, week-over-week
3. Nutrition adherence scorecard — % of days on target, avg kcal, avg protein
4. Conditioning summary — sessions logged, sleep avg, RHR delta
5. **Verdict**: on track / adjust calories / adjust volume
6. Unlock `recomp_mid_week_6` achievement
7. Generate next 6-week focus call

---

## Week 12 — Path Pick (stub)

When current ISO week == `2026-W29`:
1. Generate full program summary
2. Prompt: "New InBody scan booked?"
3. Surface 4 paths based on results:
   - **Lean Cut** (focused fat loss, 10–14 days deficit + maintain volume)
   - **Lean Bulk** (small surplus + hypertrophy block)
   - **Strength Block** (5×5, lower volume, more weight)
   - **Maintain + Skill** (hold composition, ramp BJJ + boxing)
4. Selected path becomes next program — manual handoff in next conversation, not auto

---

## Onboarding (one-time, optional)
If `data/profile.json` shows `weight_lbs_start: null`, prompt for Week 0 baseline:
- Current weight
- All body measurements
- Best estimate on starting working weights for the 4 lifts (bench / squat / RDL / pull-up)

---

## Equipment
Barbell + 200lb plates, squat rack, adjustable bench, pull-up bar, adjustable dumbbells, tricep pulley, boxing gloves + heavy bag, stationary bike, jumping rope, resistance elastics. **No cable machine.**

## Key Dates
- Program start: 2026-04-27
- BJJ start: 2026-06-02 (lines up with Week 6 milestone)
- Baby due: late March / early April 2026
- Paternity leave: ~6 weeks from baby arrival

## Rules
1. **Progressive overload is the only metric that matters week to week.** Adding weight or reps = it's working.
2. **Don't change the program before Week 12.** Boredom is not a reason to switch.
3. **Sleep > everything.** Newborn at home. On brutal nights, cut cardio, keep lifting.
4. **One flex meal/week max.** Get back on plan next meal, not next Monday.
5. **Plateau protocol:** No progress 2+ weeks → deload that lift 10%, rebuild.
6. **New InBody scan at Week 12.** Don't make cut/bulk decisions before that data.
7. **Measurements every 2 weeks.** Same conditions. Scale alone lies.
