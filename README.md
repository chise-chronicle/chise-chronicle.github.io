# Chise Chronicle

Chise Chronicle is an Astro-powered personal blog and notebook for essays, notes, experiments, and works in progress.

## Local development

This project expects `pnpm` and a modern Node version.

```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

If you are setting up a new machine, use Node `24` or another version that satisfies Astro v6.

## Editing the site

- Main site metadata and navigation live in `src/site.config.ts`
- Homepage copy lives in `src/pages/index.astro`
- About and contact pages live in `src/pages/about.astro` and `src/pages/contact.astro`
- Blog posts live in `src/content/blogs/*.md`
- GitHub Pages deployment is configured in `.github/workflows/deploy.yml`

## Deployment

The repo is configured for GitHub Pages via GitHub Actions. The intended production URL is:

`https://chise-chronicle.github.io`

In the GitHub repository settings, set `Pages -> Source` to `GitHub Actions`.

## License note

This project started from the GPL-licensed `space-ahead` Astro theme, so keep the inherited license obligations in mind when publishing or redistributing the code.
