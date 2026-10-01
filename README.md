# taste-review-demo

A demo site for [taste review](https://github.com/mfbz/taste-review): comment `/taste review` on a pull request and its Vercel preview is scored against this site's brand.

Fernhill, the garden planner on this site, is fictional. Its production deployment is the brand reference, and [`DESIGN.md`](DESIGN.md) describes the system.

## How the demo works

1. `main` deploys to production on Vercel, which is the reference the review scores against.
2. A pull request changes `/pricing`, and Vercel builds a preview of it.
3. Someone who can push comments `/taste review` and the [workflow](.github/workflows/taste-review.yml) posts the score against production, the recommendations, and the fixes.

## Run it

```bash
npm install
npm run dev   # localhost:3000
```

## License

[MIT](LICENSE)
