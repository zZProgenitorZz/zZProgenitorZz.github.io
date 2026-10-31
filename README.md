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

All copy and data lives in `src/content/`. Search the repo for `TODO:` to find every placeholder.

| File | What it holds |
| --- | --- |
| `en.ts` / `nl.ts` | UI text, name, hero, about text (NL is currently a copy of EN) |
| `projects.ts` | Projects |
| `skills.ts` | Skills per category |
| `facts.ts` | Fun facts (`**word**` renders white) |
| `socials.ts` | Email, GitHub, LinkedIn URLs |

Images go in `public/images/` (`portrait.png` is a placeholder; replace it with a transparent PNG).

## Add a project

Add an object to the array in `src/content/projects.ts`:

```ts
{ id: 'my-app', title: 'My App', description: { en: '...', nl: '...' },
  tech: ['React'], image: '/images/my-app.png', live: 'https://...', repo: 'https://github.com/...',
  size: 'large', featured: false }
```

`featured: true` shows it on the Home page (first 3). `size: 'small'` renders the image-less card. Missing `live`/`repo` hides that button.

## Contact form

Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID` to your Formspree form ID (the part after `/f/`).
Without it, the form opens a `mailto:` link instead.

## Deploy

- **Vercel / Netlify**: import the repo; build command `npm run build`, output `dist`. For Netlify add `public/_redirects` with `/* /index.html 200`; Vercel needs a rewrite of all paths to `/index.html` in `vercel.json`. Set `VITE_FORMSPREE_ID` in the project env vars.
- **GitHub Pages**: set `base: '/<repo-name>/'` in `vite.config.ts` and switch `BrowserRouter` to `HashRouter` in `src/App.tsx` (or add a `404.html` redirect). Image paths in content start with `/images/`, so prefix them with the base (or use relative paths) when using a sub-path.

## Theme: Cultivation (`theme/cultivation`)

Concept: growing as a developer is a cultivation journey. Night-ink background, purple "qi" accent, gold for realms and seals, jade only for breakthroughs. Headings use Cormorant Garamond (`@fontsource/cormorant-garamond`, OFL), labels and body use JetBrains Mono. Every themed name is paired with a plain label ("Techniques · Projects"). All decoration is drawn as SVG/CSS; animations are CSS-only and switched off under `prefers-reduced-motion`.

Edit theme content here:

- `src/content/en.ts` / `nl.ts`: section headings, hero subtitle, realm names (`skills.realms`), grade names (`projects.grades`).
- `src/content/skills.ts`: each skill has `level` 1-5 (Qi Gathering to Transcendence).
- `src/content/timeline.ts`: milestones of "Path · Journey".
- Colors: `tailwind.config.ts` (`gold`, `jade`, `accent`, ...).
