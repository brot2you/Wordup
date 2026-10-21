# 🎮 WORDUP ARCADE V3 — Crossword & Booster Edition

Standalone HTML/CSS/JavaScript learning game for English in French collège (6e–3e).

## Vocabulary update: 1,504 entries

- **V2 vocabulary is preserved**: 808 contextualised curriculum-inspired entries in 27 packs plus 96 V1 bonus entries in 8 packs.
- **600 NEW V3 entries** in 24 new thematic packs: **150 extra entries per class level** (6e, 5e, 4e, 3e).
- **1,504 deck entries in 59 packs** = **1,206 different English words/expressions**. Grade overlap is intentional to support repeated practice.
- Each entry contains an English term, French translation and short original contextual example.
- Searchable **Word Library**, grade filters, and British-English text-to-speech when the browser supports it.
- The comprehensive printable, editable text catalogue is **`WORDUP-COMPLETE-VOCABULARY-V3.txt`**.
- The extra data is in `vocab-extra.js`; do not leave it out when deploying.

## Nine playable game modes

1. **Arcade Quests** — 8-question missions across the vocabulary worlds.
2. **Crossword Lab (NEW)** — generated English crossword with French clues, intersecting words, check and reveal-a-letter help. Choose a pack to generate a new puzzle.
3. **Booster Station (NEW)** — animated **free** surprise booster; each contains three word cards with French meaning and example. One starter ticket, then one new ticket every 120 XP earned; no purchases, ads, paid currencies, or rarity marketing. Card album saved locally.
4. **Letter Lab (NEW)** — unscramble English words from French prompts, 10-word sessions and feedback.
5. **Flip Memory (NEW)** — turn 12 cards and find six English–French pairs.
6. **Challenge Mode** — timed 12-question vocabulary challenge.
7. **Practice Zone** — flashcards, listening, spelling and matching.
8. **Story Mode** — three interactive stories.
9. **2-Player Battle** — local turn-taking, no online account.

The existing rewards, avatar customisation, badges, teacher pack creation, vocabulary search, and local progression are retained from V2. V3 keeps the old `localStorage` key, so progress and teacher-made packs normally survive when deployed at the same website URL using the same browser. Changing the repository address or browser does not transfer the local data.

## Important: previous independent WordUp app

The *original* WordUp HTML/ZIP with its historic crosswords, opening boosters and older games was **not provided**. These V3 crosswords, boosters and new games are **newly implemented replacements**, not a byte-for-byte recovery of a previous unrelated WordUp app. To integrate older game modes precisely, supply the original project's `index.html` or ZIP.

## Installation

1. Download `WORDUP-ARCADE-V3.zip` and extract it.
2. For an offline test, open `index.html` in a current browser (Chromium, Firefox, Edge, Safari). English speech uses browser-provided voices.
3. To publish to GitHub Pages, copy the **contents** of the `WORDUP-ARCADE-V3` folder into the root of the GitHub repository. Required files: `index.html`, `styles.css`, `app.js`, `vocab-2026.js`, `vocab-extra.js`, and the `assets/` folder.
4. Activate Pages from your main branch/root. Do a full refresh if the browser still shows an older release.

## Sources and educational framing

The **2025 French collège English curriculum** and the **2026 English teaching support booklet**, both supplied by the user, informed the class levels, cultural axes and learning situations. The 600 V3 entries and their sample sentences are independently developed pedagogical additions informed by programme themes; they are **not** an official ministry vocabulary list, nor a claim that every term appears verbatim in those PDFs. Teacher review and sequencing by class remain important.

## Data protection

No student accounts, no servers, no analytics, and no purchases. XP, word cards, boosters, games and custom packs stay in browser `localStorage` only. Do not clear browser storage if you want to keep the progress. CSS uses optional hosted Google Fonts with built-in fallbacks; all app images and word-pack data are included in the ZIP.
