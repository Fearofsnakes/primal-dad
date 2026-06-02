# ⏭️ Next session — START HERE

_Staged 2026-06-02 (Week 6 / W23). Gab had to leave mid-session. Pick up in this order._

---

## 1. First thing: import the quest board to the phone
The Week 6 reset quests are in `data/computed/active-quests.json` and pushed, but the **phone's localStorage doesn't have them yet**. On the phone: bottom → **📥 Import State** → paste the blob below → Import. (Quests-only — verified it does NOT touch lift data.)

```json
{"primal-dad-quests":{"week":"2026-W23","program_week":6,"picked_at":"2026-06-02T20:00:00.000Z","focused_dimensions":["STR","CON","FLX","NUT"],"quests":[{"id":"2026-W23_str_lower_b","dim":"STR","desc":"Complete Lower B (hinge / glutes / posterior)","target":1,"progress":0,"xp_per":25,"total_xp":25,"note":"Your 6-week gap. RDL + hip thrust + lunges."},{"id":"2026-W23_str_overload","dim":"STR","desc":"Hit progressive overload on at least 2 lifts","target":2,"progress":0,"xp_per":10,"total_xp":20,"note":"Bump weight or reps"},{"id":"2026-W23_con_cardio_2","dim":"CON","desc":"2 conditioning sessions (the new engine)","target":2,"progress":0,"xp_per":20,"total_xp":40,"note":"Heavy-bag rounds + Zone 2 bike"},{"id":"2026-W23_flx_stretch_2","dim":"FLX","desc":"2 dedicated 15-min mobility sessions","target":2,"progress":0,"xp_per":15,"total_xp":30,"note":"Break the 6-week zero"},{"id":"2026-W23_nut_protein_5","dim":"NUT","desc":"Hit protein target on 3 logged days","target":3,"progress":0,"xp_per":5,"total_xp":15,"note":"166g, realistic floor"}]}}
```

---

## 2. Switch the program from 4 days → 3 days/week
**Gab's decision (2026-06-02):** 4 lifting days/week is too tough to sustain (newborn + sprint mode). Wants **3 days/week, done consistently**, over 4 days done inconsistently. Goal unchanged: recomp → strong, lean, mobile, well-fed dad; longevity over peak. Adherence data backs this — he averaged ~2.3 lifts/week against a 4-day target and never once hit Lower B.

**Reference video to adapt from:** https://www.youtube.com/watch?v=AVNXgDPgoI8
→ Couldn't auto-extract (YouTube blocks the fetcher). **Next time: Gab pastes the key points / transcript, OR confirm the draft below.**

**DRAFT 3-day design (confirm against the video before building):** 3× **Full Body A/B/C** — every session has a squat-or-hinge + a push + a pull + accessories. This automatically fixes the Lower-B-neglect problem (posterior chain trained every session) and keeps each session ~45–60 min.
- **Day A (push-lean):** Back Squat · Bench · Weighted Pull-Up · DB Shoulder Press · core
- **Day B (hinge-lean):** RDL · Hip Thrust · Walking Lunge · Row · calves + core
- **Day C (pull-lean):** Front Squat/Goblet · Incline DB · Pull-Up · Lateral Raise + Curls · core
- **Conditioning:** 2× short sessions (heavy-bag rounds + Zone 2 bike) on non-lift days or as finishers.

**Build work when confirmed:** update `data/program/recomp-12wk.json`, the schedule table + session structure in `CLAUDE.md`, the session cards in `index.html`, and `str_lifts_4` quest/auto-progress logic (4 → 3 sessions). Decide whether to reset the week structure or just change the split mid-program (Rule #2 says don't change before W12 — but a frequency reduction for sustainability is a deliberate exception Gab is choosing, not boredom).

---

## 3. Scope the tiny backend / GitHub back-sync
**Why:** the localStorage↔file gap is permanent friction — phone is the source of truth, but every sync is a manual export/import. Gab wants to kill it. He said he'll help scope.

**Options (recommend #1):**
1. **Vercel serverless function + GitHub API write** — dashboard POSTs state to a `/api/save` function that holds a GitHub token *server-side* and commits `data/*.json`; GETs on load. Keeps git as the database, no new infra, no exposed token. Cleanest fit for this repo.
2. **Vercel serverless + KV store** (Vercel KV / Upstash Redis) — faster, but state lives outside git (loses the versioned-history benefit).
3. ~~Supabase~~ — explicitly ruled out (CLAUDE.md).

**Open questions for Gab:** auto-save on every change vs. a "Sync" button? GitHub token scoping? Keep the manual export/import as a fallback? → answer these, then build option 1.

---

## Status snapshot (shipped 2026-06-02, all pushed)
- Synced phone export (W18–W23) → canonical files + backup at `data/imports/2026-06-02-export.json`. **Overall L3 "Iron Father", 356 XP** (STR 336 / CON 20 / FLX 0 / NUT 0).
- Fixed overall-leveling bug (total-XP based, not avg-of-4-dims).
- Dropped BJJ; rebuilt CON engine (heavy bag + bike + rope + run, 2/wk floor); added **🔋 Engine Builder** achievement.
- Week 6 reset quest board + new Lower B quest with auto-progress wiring.
- Last commit: `7482261`. Remote: github.com/Fearofsnakes/primal-dad.
