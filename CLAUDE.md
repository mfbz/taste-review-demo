@AGENTS.md

# CLAUDE.md · taste-review-demo

A demo site for [taste review](https://github.com/mfbz/taste-review). Fernhill, the garden planner it presents, is fictional. Production (`main` on Vercel) is the brand reference; pull requests change the site and are reviewed with `/taste review`.

## Layout

- Next.js App Router, Tailwind 4, TypeScript strict, `src/`-rooted with `@/*` → `./src/*`.
- `src/app/page.tsx` (`/`) is the reference page; `src/app/pricing/page.tsx` (`/pricing`) is the page the review checks.
- `src/data/fernhill.ts` holds the copy; `src/components/` the shared components.
- `DESIGN.md` is Fernhill's design system; its tokens live in `src/app/globals.css`.
- `.github/workflows/taste-review.yml` runs the review; `ci.yml` runs the checks.

## Conventions

- kebab-case files, named exports, no default exports outside Next's file conventions, no barrel files.
- Module layout: imports → types → constants → helpers → the exported component last.
- Comments explain why, never what.
- Colours, sizes and radii come from the tokens in `globals.css`, except on a branch that is deliberately off-brand for a demo.

## Repository hygiene

This repository is public. Never commit local user data (machine paths, personal emails, real environment values). The Taste Engine key lives only in the repository's Actions secrets as `TASTE_API_KEY`.

## Git workflow

- Work on a branch per change, merged into `develop`; `develop` reaches `main` through a pull request merged with a merge commit.
- Commit messages are plain and imperative. No tool or agent attribution of any kind.

## Commands

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
npm run format:check
```
