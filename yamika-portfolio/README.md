# Yamika Perera — Portfolio

Professional portfolio for Yamika Perera, Technical Product Manager.

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages (static export)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

The static site is exported to the `out/` directory.

## Deployment (Cloudflare Pages)

1. Connect this repository to Cloudflare Pages.
2. Configure:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npx next build`
   - **Build output directory:** `out`
   - **Production branch:** `main`

## Content Updates

All content is in `src/content/`:

| File              | Purpose                        |
| ----------------- | ------------------------------ |
| `profile.ts`      | Name, contact, bio, site URL   |
| `experience.ts`   | Career timeline and education  |
| `projects.ts`     | Project case studies            |
| `skills.ts`       | Technical capabilities         |

Update these files to change site content — no CMS required.

## Adding a CV

Place an approved CV PDF in `public/documents/` and add a download link in the relevant pages.

## Project Structure

```
src/
  app/           → Pages and routes
  components/    → Reusable UI components
  content/       → Typed content data
  lib/           → Utilities and metadata helpers
public/          → Static assets
```
