# GoOpen.no

GoOpen.no is a Norwegian knowledge site for open source, Creative Commons, open licensing, open standards, and practical participation in open communities.

The site combines Markdown-based articles and FAQs with curated external resources, a searchable software catalog, and simple entry points for contributing through GitHub and discussion in Signal.

## What The Site Contains

- Introductory articles about open source, Creative Commons, open data, licensing, attribution, and open collaboration.
- FAQ pages generated from Markdown files.
- External resources such as organizations, reports, guides, and knowledge sources.
- A searchable software catalog at `/programvare`.
- Front page sections for featured articles, featured software, external resources, and community participation.
- Links for editing content on GitHub from generated content pages.

## Main Routes

- `/`: front page with introductions, FAQs, featured software, external resources, and community links.
- `/faq`: overview of FAQ content.
- `/eksterne-ressurser`: searchable and filterable list of external resources.
- `/programvare`: searchable and filterable catalog of open software and applications.
- `/post/<slug>`: generated article or FAQ page from `content/*.md`.
- `/ressurs/<slug>`: generated resource view for content items that use `source`.

## Stack Overview

- Next.js App Router for routing, server rendering, and static generation.
- React for component-based UI.
- Tailwind CSS v4 for layout and styling.
- MUI for search and filter controls.
- Markdown content in `content/*.md`.
- `gray-matter` for frontmatter parsing.
- `react-markdown` and `remark-gfm` for Markdown rendering.

## Project Structure

- `app/`: route files and page composition.
- `components/`: reusable UI components.
- `content/`: Markdown content files with frontmatter metadata.
- `data/software.ts`: curated software catalog used by `/programvare` and the front page.
- `data/licenses.js`: license data.
- `lib/content.ts`: content loading, parsing, sorting, and filtering utilities.
- `app/actions.ts`: server-side helpers that return grouped content for pages.
- `public/`: static images and assets.

## Markdown Content

Markdown files in `content/` are the source of truth for articles, FAQs, and external resources.

Each file uses frontmatter metadata:

```yaml
---
id: unique-id
title: "Title"
description: "Short summary"
slug: "url-slug"
posttype: ["list"]
tag: "list"
author: "Author name"
organization: "Organization name"
category: "organisasjon"
url: "https://example.org/"
mainImage: ""
source: ""
license: ""
---
```

Common field behavior:

- `slug`: controls the generated URL.
- `posttype` and `tag`: place content in sections such as `list`, `faq`, `external`, or `story`.
- `description`: shown in cards and previews.
- `category`: used for filtering external resources.
- `organization`: shown on external resource cards.
- `url`: target URL for external resource cards.
- `source`: enables `/ressurs/<slug>` generation for source-based resource pages.
- `license`: records reuse/license metadata for content.

## Content Groups

`app/actions.ts` maps Markdown files into page sections:

- `fetchAllPosts()` -> `posttype` or `tag` includes `list`.
- `fetchFAQ()` -> `posttype` or `tag` includes `faq`.
- `fetchStory()` -> `posttype` or `tag` includes `story`.
- `fetchExternalLinks()` -> `posttype` or `tag` includes `external`.

Changing `posttype`, `tag`, or `category` changes where content appears after rebuild.

## External Resources

External resources live in `content/*.md` with:

```yaml
posttype: ["external"]
tag: "external"
category: "organisasjon"
url: "https://example.org/"
```

The `/eksterne-ressurser` page uses `components/ExternalResourcesExplorer.tsx` to provide:

- full text search across title, organization, description, and category,
- category filtering,
- responsive resource cards.

Current intended categories include organizations, reports, and guides. Applications/software should be added to `data/software.ts` instead.

## Software Catalog

The software catalog is maintained in `data/software.ts`.

Each software item has this shape:

```ts
{
  id: "next-js",
  title: "Next.js",
  description: "Norwegian description",
  category: "Utviklerverktøy",
  url: "https://nextjs.org/",
  tags: ["Featured"],
  metadata: { lisens: "MIT" },
}
```

The `/programvare` page uses `components/SoftwareExplorer.tsx` to provide:

- full-width search,
- category filters on a separate horizontal line,
- full text search across title, description, and category,
- responsive software cards.

The front page shows the first six software items tagged with `Featured`.

Current software categories include:

- `Utviklerverktøy`
- `Lydverktøy`
- `Sosiale medier`
- `Nettlesere`

## Add A New Article Or FAQ

1. Create a Markdown file in `content/`.
2. Add `id`, `title`, `slug`, `description`, `posttype`, and `tag`.
3. Write the body in Markdown.
4. Use `posttype: ["faq"]` for FAQ content.
5. Use `posttype: ["list"]` for regular article/list content.

After build, the page is generated at:

```text
/post/<slug>
```

## Add A New External Resource

1. Create a Markdown file in `content/`.
2. Use `posttype: ["external"]` and `tag: "external"`.
3. Set `category`, `organization`, `url`, `title`, and `description`.
4. Keep descriptions in Norwegian.

The item appears automatically on:

```text
/eksterne-ressurser
```

## Add New Software

1. Open `data/software.ts`.
2. Add a new item to `softwareItems`.
3. Use a Norwegian category and description.
4. Add `metadata.lisens` when the license is known.
5. Add `tags: ["Featured"]` only if it should appear on the front page.

The item appears automatically on:

```text
/programvare
```

## Development Setup

Use Node.js 20+.

```bash
git clone https://github.com/christer-io/goopen-no.git
cd goopen-no
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

## Scripts

```bash
npm run dev       # start local development server
npm run build     # production build
npm run start     # start production server after build
npm run lint      # run ESLint
npm run lint:fix  # run ESLint with automatic fixes
npm run format    # format supported files with Prettier
```

## Verify Before Deploy

Run:

```bash
npm run lint
npm run build
```

Then check the most important routes:

- `/`
- `/faq`
- `/eksterne-ressurser`
- `/programvare`
- a few `/post/<slug>` pages

## Notes

- `README.no.md` is generated from `README.md` by the repository workflow. Update `README.md` first.
- Some lint warnings may already exist for unused legacy imports and components.
- Next.js may warn about multiple lockfiles if another `package-lock.json` exists above the project directory.
