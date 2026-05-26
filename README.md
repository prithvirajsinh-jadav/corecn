# CoreCN Registry

Custom UI components built on [shadcn/ui](https://ui.shadcn.com), distributed via a hosted component registry. Consumers install code into their own repo with the shadcn CLI — nothing is published as an opaque npm UI package.

## Quick start (development)

```bash
npm install
npm run dev          # Preview registry components at http://localhost:3000
npm run registry:build   # Regenerate public/r/*.json after changing registry.json
```

After `registry:build`, static registry files are served from `public/r/`:

| Endpoint | Purpose |
|----------|---------|
| `/r/registry.json` | Full catalog |
| `/r/<item>.json` | Single installable item |

## Registry items

| Item | Type | Description |
|------|------|-------------|
| `button`, `card`, `input`, `label`, `textarea` | `registry:ui` | shadcn primitives |
| `brand-button` | `registry:ui` | Rounded brand-styled button |
| `stat-card` | `registry:block` | Dashboard metric card |
| `hello-world`, `example-form`, `complex-component`, `example-with-css` | examples | Template demos |

Source definitions live in [`registry.json`](registry.json). Component source is under [`registry/new-york/`](registry/new-york/).

## Install in another project

### Option A — Namespace (recommended)

```bash
npx shadcn@latest registry add @corecn=https://corecn.vercel.app/r/{name}.json
npx shadcn@latest add @corecn/stat-card
npx shadcn@latest add @corecn/brand-button
npx shadcn@latest list @corecn
```

Or add to `components.json`:

```json
{
  "registries": {
    "@corecn": "https://corecn.vercel.app/r/{name}.json"
  }
}
```

### Option B — Direct URL

```bash
npx shadcn@latest add https://corecn.vercel.app/r/stat-card.json
```

### Local testing

With the registry served on port 3000 (e.g. `npm run dev` or `npx serve public -l 3000`):

```bash
npx shadcn@latest registry add @corecn=http://localhost:3000/r/{name}.json
npx shadcn@latest add @corecn/stat-card
```

A working consumer example is in [`examples/consumer-test/`](examples/consumer-test/).

## Adding a new component

1. Create the file under `registry/new-york/ui/` (primitive) or `registry/new-york/blocks/<name>/` (block).
2. Add an item to [`registry.json`](registry.json) with `name`, `type`, `files`, and `registryDependencies` / `dependencies` as needed.
3. Run `npm run registry:build`.
4. Test: `npx shadcn@latest view https://corecn.vercel.app/r/<name>.json` and `npx shadcn@latest add @corecn/<name>` from a consumer app.

## Deploy to production

This project is a Next.js app; registry JSON in `public/r/` is deployed as static assets.

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Build command: `npm run build` (runs Next.js build; ensure `registry:build` runs first — add to `package.json` scripts if needed).

Add a prebuild step so registry JSON is always fresh:

```json
"scripts": {
  "prebuild": "npm run registry:build",
  "build": "next build"
}
```

4. Production URL: `https://corecn.vercel.app`

### Other hosts

Any static host works if you upload the contents of `public/r/` under `/r/`, or deploy the full Next.js app.

## Optional: official registry index

If this registry is public and open source, you can submit `@corecn` to the [shadcn registry index](https://ui.shadcn.com/docs/registry/registry-index) so users can discover it without pasting a URL template.

## Project structure

```
registry.json              # Source catalog (edit this)
registry/new-york/ui/      # Primitives + brand-button
registry/new-york/blocks/  # Blocks (stat-card, examples, …)
public/r/                  # Built JSON (generated — commit for static deploy)
components.json            # shadcn config for this repo
examples/consumer-test/    # Sample app that installs from @corecn
```

## License

MIT (same as upstream [registry-template](https://github.com/shadcn-ui/registry-template)).
