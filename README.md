# sparkhabitsapp.com

Marketing site, SEO content, free printables, and legal pages for the Spark app. Built with [Astro](https://astro.build) as a fully static site.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run check     # type-check .astro and .ts files
```

## Structure

Follows the SEO plan: a homepage, four topic hubs, printables, and blog posts underneath each hub.

| URL | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/chore-charts/`, `/reward-charts/`, `/potty-training-chart/`, `/toddler-routines/` | `src/content/hubs/*.md` rendered by `src/pages/[hub].astro` |
| `/blog/<slug>/` | `src/content/blog/<slug>.md` rendered by `src/pages/blog/[slug].astro` |
| `/printables/`, `/printables/<slug>/` | `src/data/printables.ts` |
| `/help/`, `/privacy/`, `/terms/` | `src/pages/*.astro` (`/support/` redirects to `/help/`) |

Colors and fonts mirror the app's `src/theme/tokens.ts`. The phone screens are HTML mockups in `src/components/phones/`.

## Adding a blog post

Create `src/content/blog/<slug>.md`. The file name is the URL.

```yaml
---
title: 'Chores for 3 Year Olds (With a Free Chart)'   # H1
seoTitle: 'Chores for 3 Year Olds: 15 Ideas + Free Chart'  # optional <title>, max 60 chars
description: 'Under 160 characters.'
cluster: 'chore-charts'        # chore-charts | reward-charts | potty-training-chart | toddler-routines
keyword: 'chores for 3 year olds'
group: 'By age'                # subheading the post is listed under on its hub
printable: 'chore-chart'       # optional, slug from src/data/printables.ts
published: 2026-11-01
---
```

The post is listed on its hub page, the blog index, and the sitemap automatically. It also gets breadcrumbs, `BreadcrumbList` and `Article` schema, the printable card, and the app pitch. In the body, follow the plan's linking rules: link to the hub in the first 150 words, add 2–3 links to sibling posts, and link once to `/` near the end. Set `draft: true` to keep a post out of the build.

## Store links

When the App Store or Google Play listing goes live, set `appStoreUrl` / `playStoreUrl` in `src/site.ts`. Every "Coming soon" button becomes a download link.

## Hosting on GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Repo **Settings → Pages**: Source = **GitHub Actions**.
2. Custom domain: `sparkhabitsapp.com` (`public/CNAME` sets this). Tick **Enforce HTTPS** once the certificate is issued.
3. DNS at your registrar:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `dmartirosian-ggm.github.io`
4. After the first deploy, submit `https://sparkhabitsapp.com/sitemap-index.xml` in Google Search Console.
