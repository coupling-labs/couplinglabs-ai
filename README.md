# couplinglabs.ai

Marketing site for **Coupling Labs** — an AI engineering studio. AI, coupled to the systems you already run.

## Stack

Hand-written HTML/CSS/JS. No framework, no build step, no trackers. Deployed via GitHub Pages.

## Local development

Any static file server works:

```
python -m http.server 8794
```

## Deployment

Push to `main`. GitHub Pages serves from the branch root; `CNAME` pins the custom domain.
