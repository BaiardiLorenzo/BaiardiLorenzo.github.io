# Lorenzo Baiardi — Portfolio

A bilingual, static personal portfolio built with Astro and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Edit content

All editable website content is in [`src/data/portfolio.json`](src/data/portfolio.json): identity and contact details, both language versions of every label and paragraph, navigation, skills, experience, projects, insights, and SEO text.

Each translatable value has an `en` and `it` key. The language selector stores the visitor's choice and updates content, accessibility labels, project image alt text, and page metadata. Lists use `id`, `order`, and `visible`, so they can be safely hidden and reordered without component changes.

See [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md) for the editing convention and advice on safe public portfolio content.

## Structure

```text
src/
  components/       Shared header, social links, and icons
  data/             portfolio.json: all editable site content
  layouts/          Shared document layout and metadata
  pages/            Homepage
  styles/           Theme and shared styles
public/
  images/           Project artwork
  resume.pdf        Downloadable résumé
```

The site is configured for GitHub Pages at `https://baiardilorenzo.github.io/`.
