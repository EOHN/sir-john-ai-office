# Sir John AI Office — Phase 2

Open index.html to preview, or host the four web files on GitHub Pages. This is a static website, not an AI backend. All 11 employee profiles are clickable; action buttons populate the task form. The board supports manual status changes, saved results, keyword-based routing, lesson workflow templates and JSON backups. Copy a prepared prompt, open ChatGPT, paste it and return with the answer. No API key needed. Task data stays in browser localStorage, not GitHub or ChatGPT; different devices do not sync. Export backups, especially before switching from local preview to a hosted URL. Never commit personal records, student data, API keys or exported tasks to a public repository.

## GitHub Pages
1. Create a public repository named `sir-john-ai-office` on GitHub (free account).
2. Upload index.html, styles.css, script.js, tasks.js, README.md and .nojekyll to the repository root, not inside another folder. Commit changes to main.
3. Open Settings > Pages. Under Build and deployment choose Deploy from a branch, main, /(root), Save.
4. After GitHub reports successful deployment, open the URL shown under Settings > Pages. Usually https://YOUR-USERNAME.github.io/sir-john-ai-office/.

No local installation is necessary. This release does not perform autonomous tasks, call AI or Google APIs, run scheduled jobs, authenticate users or sync data. Use only non-sensitive demo tasks. Source JavaScript is public when hosted. Next: secure backend and integration feasibility.
