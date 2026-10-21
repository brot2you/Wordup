# WORDUP ARCADE V4 — Reunion of the two apps

**Open `index.html`** — the modern neon arcade containing all nine V3 modes, 59 new word worlds (plus the 8 V3 bonus themes) and all 64 themes imported from the user-supplied original Word Up.

**Choose “ORIGINAL GAME ROOM”** to access `classic.html` — the original `index(8).html` with its complete, unmodified game algorithms, now wrapped in the neon artistic direction. An extra 51 curriculum packs (1,408 words) can be learned and used in original activities. Original 64 themes, missions, guardians, daily quests, cards, SRS and badges are preserved.

## Original games verified in the source code
Speed Match; Memory; Range-mots; Mot mystère (Wordle); Upgrade!; L’échelle; Labo des mots; Bataille navale; Mots croisés; Atelier de composition; Idiom Quest; Slang Decoder; Entraînement libre; Thésaurus. Also boosters, card collection, journey map, missions, guardian fights, quizzes, and repetitions.

## Vocabulary counts
- Original uploaded game: **1,553** entries in **64** themes.
- V3: **1,504** entries, of which **1,408** additional curriculum-inspired entries and **96** original V3 starter entries.
- V4 modern arcade includes both corpora: **3,057 entries** (overlapping terms may appear in different contexts; not 3,057 different words).
- The original classic engine includes its **1,553** base entries + **1,408** new curriculum-inspired entries in 51 new locations = **2,961 entries**. Original V3 bonus entries remain in modern arcade.

## Save data
Two separate localStorage keys are deliberately preserved: `wordup_v1` for classic (same key as the user's original), and `brot2you-wordup-arcade-v1` for modern arcade. They **do not** share XP/coins/booster ownership yet. You can navigate between the two rooms without either save being overwritten. Data are saved on each browser/device locally. No login needed.

## Install on GitHub Pages
Upload the complete folder contents to the root of the WORDUP repository: `index.html`, `classic.html`, `app.js`, `styles.css`, `classic-arcade.css`, `vocab-2026.js`, `vocab-extra.js`, `vocab-original.js`, `v4-classic-vocab.js`, and the `assets/` folder. Keep exact filenames. Enable Pages on your main branch/root. 

All 3,057 vocabulary entries are sourced either from the user-supplied original file or independently prepared V2/V3 educational content, inspired by the 2025 French collège English curriculum and 2026 accompanying booklet. The programmes themselves do not contain a mandatory list of precisely these 3,057 words.

## Notes
This is a functional V4 fusion with two connected game rooms (not yet a single unified scoring engine). Original games and progression algorithms remain intact and the design has been reskinned; extensive end-to-end testing can still surface edge cases in the original logic that existed prior to this fusion.
