# Portfolio content guide

All editable portfolio copy, identity details, links, projects, experience, skills, and interface translations live in [`src/data/portfolio.json`](src/data/portfolio.json). Components only render this file.

Each visible phrase uses a paired object:

```json
"title": { "en": "English text", "it": "Testo italiano" }
```

Keep both values updated together. The language selector changes every paired phrase, translated accessibility label, image alternative text, and page metadata.

For lists (statistics, skill groups, experience entries, projects, and insight cards):

- Set `visible` to `false` to hide an item without deleting it.
- Change `order` to rearrange an item; lower numbers appear first.
- Keep `id` stable once the item is published.
- Add new items using the same bilingual shape as nearby entries.

Technical names, technologies, and product names may be left identical when they do not have a meaningful translation. Public links and images are configured alongside the corresponding project, and the résumé URL is in `profile.resumeUrl`.

Do not add confidential client architecture, screenshots, source code, internal framework details, or unapproved metrics. Use high-level, outcome-focused descriptions for enterprise work.
