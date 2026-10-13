# muratavci05.github.io

Personal site of Murat Avci, AI Engineer in Frankfurt. Live at **https://muratavci05.github.io**.

Built with [Astro](https://astro.build) and TypeScript. The output is plain static HTML with a few lines of client script (theme toggle, copy email). Fonts are self-hosted, so no requests go to third-party font servers.

## Structure

```
src/
  data/         typed content: profile, projects, experience, certificates, UI strings
  components/   Header, Hero, Work, Principles, Record, Home
  layouts/      HTML shell, meta tags, hreflang, theme bootstrap
  pages/        / (English) and /de/ (German)
  styles/       design tokens for light and dark themes
```

All content lives in `src/data/*.ts` and is checked by TypeScript: every text has an `en` and a `de` version, or the build fails.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to dist/
```

Pushing to `main` deploys through GitHub Actions (`.github/workflows/deploy.yml`).
