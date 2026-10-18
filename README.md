# sparkhabitstracker.com

Marketing site, Privacy Policy, Terms of Use, and Support page for the Spark Habit Tracker app.
Plain static HTML/CSS — no build step.

| Page | URL |
|---|---|
| Home | https://sparkhabitstracker.com/ |
| Privacy Policy | https://sparkhabitstracker.com/privacy/ |
| Terms of Use | https://sparkhabitstracker.com/terms/ |
| Support | https://sparkhabitstracker.com/support/ |

Colors and fonts mirror the app's `src/theme/tokens.ts`. The phone screens on the home page are HTML mockups;
to swap in real screenshots, drop PNGs into `assets/` and replace the `.phone` blocks in `index.html` with `<img>` tags.

## Preview locally

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Hosting on GitHub Pages

1. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
2. Custom domain: `sparkhabitstracker.com` (the `CNAME` file already sets this). Tick **Enforce HTTPS** once the certificate is issued.
3. At your domain registrar, add DNS records:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `dmartirosian-ggm.github.io`
