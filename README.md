# Portfolio

Dark, minimal portfolio. Vite + React 18 + TypeScript + Tailwind CSS v3.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint
```

## Edit content

All copy and data lives in `src/content/`. English and Dutch live side by side (`en.ts` / `nl.ts`; most data files hold both languages per entry).

| File | What it holds |
| --- | --- |
| `en.ts` / `nl.ts` | UI text, name, hero, about text (EN and NL) |
| `projects.ts` | Projects |
| `skills.ts` | Skills per category |
| `facts.ts` | Fun facts (`**word**` renders white) |
| `socials.ts` | Email, GitHub, LinkedIn URLs (and the social link list), optional per-language `cv` paths |
| `sequences.ts` | Growth path (journey) |
| `localized.ts` | `Localized` type and `l10n(en, nl)` helper used by the data files |

Images: put the originals in `docs/images/` (portrait in `Me/`, screenshots in `Projects/`), then run `npm run images` to create the optimised WebP copies in `public/images/`. To add or replace an image, edit the file list in `scripts/images.mjs`.

- Portrait: `public/images/portrait.webp` (800×960, 5:6, cropped from the top).
- Project screenshots: `public/images/projects/*.webp` (1600px wide, uncropped). Set `image` in `projects.ts`. The tarot card shows it in an arched window: use `imagePosition` (a CSS `object-position`, e.g. `'25% center'`) to choose which part of a wide screenshot is visible.
- CV: put one PDF per language in `public/cv/` and set `socials.cv` to `{ en: '/cv/CV_Shantosh_Merhai_EN.pdf', nl: '/cv/CV_Shantosh_Merhai_NL.pdf' }`. The button links to the PDF for the active site language. Leave `cv` out to hide the button.

## Add a project

Add an object to the array in `src/content/projects.ts`:

```ts
{ id: 'my-app', title: 'My App', description: l10n('...', '...'),
  tech: ['React'], image: '/images/projects/my-app.webp', live: 'https://...', repo: 'https://github.com/...',
  size: 'large', status: ['wip'], year: 2026, tags: ['web'], featured: false }
```

`featured: true` shows it on the Home page (first 3). `size: 'small'` renders the image-less card. Missing `live`/`repo` hides that button.

## Project structure

```
src/
  components/
    layout/    navbar, footer, social rail, mobile menu, language select, error boundary
    sections/  page sections (hero, projects preview, journey, about preview, contact)
    projects/  project cards, filters and their small parts (file tab, stack line, links, status)
    about/     skills grimoire, fun facts, framed portrait
    contact/   contact form and contact links
    decor/     SVG decoration (logo, gear, rune circle, crosshair, corner brackets)
    ui/        generic building blocks (button, section, inputs, safe image, social links)
  content/     all copy and data (EN and NL)
  i18n/        language context and hooks
  lib/         small helpers (placeholder filling, roman numerals)
  pages/       one component per route
public/        files served as-is (images/, cv/, favicon)
docs/          images/ holds the originals (see above), screenshots/ the current page screenshots
scripts/       images.mjs converts the originals to WebP
```

## Contact form

Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID` to your Formspree form ID (the part after `/f/`).
Without it, the form opens a `mailto:` link instead.

## Deploy

- **Vercel / Netlify**: import the repo; build command `npm run build`, output `dist`. For Netlify add `public/_redirects` with `/* /index.html 200`; Vercel needs a rewrite of all paths to `/index.html` in `vercel.json`. Set `VITE_FORMSPREE_ID` in the project env vars.
- **GitHub Pages**: set `base: '/<repo-name>/'` in `vite.config.ts` and switch `BrowserRouter` to `HashRouter` in `src/App.tsx` (or add a `404.html` redirect). Image paths in content start with `/images/`, so prefix them with the base (or use relative paths) when using a sub-path.

## Theme: Arcane terminal (`theme/arcane-terminal`)

Concept: the code-editor/terminal portfolio, where code is spellcraft. Palette: `#16161E` background, purple (`accent`, `#A277FF`) for headings, links and borders, red (`accent-2`, `#FF3B4E`) for active states and the cursor, gold (`ok`, `#E3AE3E`) for success/shipped and the prompt. JetBrains Mono everywhere (no extra font). Hero is a terminal window running `invoke whoami`; skills are a syntax-highlighted `grimoire.ts` generated from `content/skills.ts`; the growth path is a `git log --graph` of sequences; the footer is an editor status bar (branch, errors, EN | NL, UTF-8, Amsterdam time). Decor: corner brackets, crosshairs, a barely visible 32px blueprint grid on the hero, a slowly rotating rune circle (SVG glyph rings). Animations (cursor blink, rune rotation) are CSS-only and switched off under `prefers-reduced-motion`.

Edit theme content here:

- `src/content/projects.ts`: each project has `status` (`shipped` / `wip` / `school`), `year` and `tags`; these drive the `--filter=`, `--status=` and `--year=` toggles on `/works`.
- `src/content/skills.ts`: includes a `learning` category.
- `src/content/sequences.ts`: growth path; the `current: true` step is shown as `level:` in the hero and as `HEAD` in the log.
- `src/content/en.ts` / `nl.ts`: hero command, stack line, headings, button text.
- Colors: `tailwind.config.ts`. Three spots hard-code a hex value instead of using a token: `Logo.tsx` and `public/favicon.svg` (the `accent-2` red) and `RuneCircle.tsx` (the `accent` purple). Change those too when you change the palette. The previous palette (purple / magenta / mint) is kept in the git tag `colors-purple-magenta`.
