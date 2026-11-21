# WORDUP ARCADE V5 — SAY IT BETTER!

## Nouveautés
- **Rubrique « SAY IT BETTER! »** (couleur vert fluo « surligneur ») :
  - sur l'accueil `index.html`, juste sous les modes de jeu : accroche « Stop saying good! Find the perfect word. » + 7 tuiles ;
  - dans la salle de jeux de `classic.html`, en tête, avant « Tous les autres jeux » ;
  - un bandeau sur l'accueil de `classic.html` et un espace dédié `classic.html#sayitbetter` (statistiques : phrases améliorées, collocations, textes réécrits).
  - Elle regroupe Upgrade!, L'échelle, Thésaurus, Labo des mots, Atelier de composition, Word Partners et The Rewriting Room.
- **Word Partners** (`#partners`) : 120 collocations (6e : 25, 5e : 30, 4e : 30, 3e : 35), make/do/take/have/get/go + nom et adjectif + nom.
  Mécaniques : boîtes à trier, phrase à compléter (le verbe proposé est conjugué comme dans la phrase), intrus, partie mixte, carnet à écouter.
  Chaque erreur affiche une explication en français. Les associations doubles (have/take a shower, go/get home…) ne sont jamais mises en concurrence dans une même boîte.
- **The Rewriting Room** (`#rewrite`) : 40 textes (10 par niveau, rattachés aux axes affichés dans l'appli), 180 mots à remplacer, 540 options notées ✅ juste / ⚠️ possible / ❌ incorrect, chacune avec une explication (sens, intensité, registre, collocation).
  ⚠️ on peut garder le mot ou chercher mieux ; ❌ on réessaie. À la fin : version de départ et version améliorée côte à côte, à écouter, avec 1 à 3 étoiles.

## Modes améliorés
- **Upgrade!** : jauge d'intensité (mot faible ↔ mot juste, avec l'indice « plus fort », « même force mais plus précis » ou « plus doux ») ; explication pour chacun des 148 mauvais choix.
- **L'échelle** : 34 échelles (12 d'origine + 22 nouvelles : cold, hot, tired, hungry, angry, scared, funny, dirty, wet, surprised, tasty, hate, walk, look, eat, loud, important, famous, crowded, wind, rain, laugh), 5 échelles par partie, un exemple à écouter après chaque échelle.
- **Thésaurus** : chaque famille a 1 exemple en contexte (à écouter) et 1 faux ami quand il y en a un (great, terrible, sympathetic, large, glad, deceived, support, pretend, too, pretty, nervous, regard, actual, busy…). Les 22 nouvelles échelles y sont aussi.
- Quêtes : « Réussis 8 collocations », « Réécris un texte ». Badges : 🤝 Inséparables (50 collocations), ✍️ Plume affûtée (10 textes).
- Correctifs de lisibilité dans le thème sombre : texte des encadrés du bandeau de correction, mots surlignés, bouton ✕.
- Les liens `classic.html#…` marchent aussi quand la page est déjà ouverte (hashchange) et après la création du profil.

## Compatibilité
- Clés localStorage inchangées (`wordup_v1`, `brot2you-wordup-arcade-v1`). Nouveaux champs ajoutés dans `wordup_v1` : `sib.done`, `st.wp`, `st.rw`. Une ancienne sauvegarde se charge sans perte (testé).
- `b2y-sauvegarde.js` inchangé. Vocabulaire existant (3 057 entrées) intact.
- Nouvelles données dans `classic.html` : blocs JSON `data-sib-upgrade`, `data-sib-ladders`, `data-sib-partners`, `data-sib-rewrite`.
- Tout le nouveau code est en ES5. Aucun alert/confirm/prompt.

## Fichiers modifiés
`classic.html`, `classic-arcade.css`, `app.js`, `styles.css`, `README.md` (+ ce fichier). Les autres fichiers sont inchangés.
