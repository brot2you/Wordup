# 🎮 WORDUP ARCADE — V2 · Curriculum Vocabulary Edition

A standalone web app for learning English in French collège (6e, 5e, 4e, 3e). Built in HTML, CSS and JavaScript. Works on desktop, tablet and phone and can be hosted via GitHub Pages.

## What's new in V2

- **808 new contextualised vocabulary entries**, hand-curated and categorised into **27 curriculum decks**:
  - **6e**: 209 entries (6 decks, including a Rainbow Serpent special)
  - **5e**: 196 entries (7 decks, including Irish landscapes and cinema)
  - **4e**: 202 entries (7 decks, including hurling and Irish culture)
  - **3e**: 201 entries (7 decks, including art as a form of engagement)
- **96 original words** retained from V1 in **8 BONUS decks**.
- Total **904 deck entries**, representing **732 distinct English words or phrases** (repetitions across levels are deliberate for revision).
- **Filters by year**: 6e / 5e / 4e / 3e / BONUS / ALL.
- **Vocabulary search**, in English or French, inside the deck selector and the new **Word Library**.
- **Word Library**: English term, French meaning, short contextualised example, British-English audio, 'I know this' progression marker.
- More contextual feedback after every Arcade Quest or Challenge question.
- All existing V1 game types remain: Quests, Challenge, Practice (flashcards/listening/spelling/matching), Story, 2-Player Battle, rewards and teacher studio.
- Original local-storage key preserved (`brot2you-wordup-arcade-v1`) to keep pupils' progress from V1 **if the same website origin and browser are used**.

## Pedagogical grounding and limitations

The content is based on the **2025 programme d'anglais pour les classes de collège**, particularly its cultural axes and *Lexique en lien avec les axes culturels* sections. Extra focused packs follow the scenarios in the **2026 livret d'accompagnement**: The Rainbow Serpent (6e), The Emerald Isle / Wild Atlantic Way (5e), Irish hurling (4e), and music and social engagement (3e). Grade-specific CEFR level ranges respect the LVA/LVB expectations.

**IMPORTANT:** This is a pedagogical selection developed *from* the programme, not an official, exhaustive or verbatim vocabulary list. Many words and examples are original educational extensions. Both provided PDF files remain separate source material and are NOT reproduced or bundled in this app. Review the entries and edit them to suit your own teaching sequence.

The complete new-deck content, including examples, can be inspected in `WORDUP-VOCABULARY-INDEX.txt`; the machine-readable deck data is in `vocab-2026.js`.

## Installation

1. Download and extract `WORDUP-ARCADE-V2.zip`.
2. Open `WORDUP-ARCADE-V2/index.html` with your browser (no server required).
3. To publish, create/open your GitHub repository and copy the **contents** of `WORDUP-ARCADE-V2/` into the **repository root** (including `assets/`, `vocab-2026.js`, `app.js`, `styles.css` and `index.html`).
4. Activate GitHub Pages from the main branch/root if not already activated.
5. Use refresh after deployment. Browser caching could temporarily keep the old version; perform a hard refresh if necessary.

### Updating an existing V1 deployment

Replacing V1's `index.html`, `styles.css`, `app.js`, copying `vocab-2026.js` and retaining the `assets/` directory updates the app. Do not delete `vocab-2026.js` — V2 loads it before `app.js`.

### Custom packs in Teacher Studio

A teacher can create local word packs with semicolon-separated `English;French;Example` rows. These custom packs stay in browser local storage and cannot automatically sync between pupils. They appear in the **BONUS** filter. For shared words across all pupils, add entries to `vocab-2026.js` and redeploy the repository.

## Data and privacy

The app does not require accounts, servers, subscriptions, or student identity information. Progress and custom packs stay on the device in `localStorage`. Speech playback uses the browser's available English voice; voice quality varies by operating system and browser. No teacher tracking or cross-device synchronisation.

## Notes for future versions

- Revisit repeated words across years in spaced-retrieval sessions.
- Add authentic documents/audio and teacher-controlled projects by cultural axis.
- Improve speech voices through vetted on-device recordings where possible.
- Add export/import of teacher custom packs and personalised vocabulary sets.
