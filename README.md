# CoreCN Registry

Custom UI components built on [shadcn/ui](https://ui.shadcn.com), distributed via a hosted component registry. Consumers install code into their own repo with the shadcn CLI — nothing is published as an opaque npm UI package.

## Quick start (development)

```bash
npm install
npm run dev              # Preview registry components at http://localhost:3000
npm run registry:build   # Regenerate public/r/*.json after changing registry.json
npm run registry:generate  # Regenerate registry.json from registry/corecn/ui source
```

After `registry:build`, static registry files are served from `public/r/`:

| Endpoint | Purpose |
|----------|---------|
| `/r/registry.json` | Full catalog (67 items) |
| `/r/<item>.json` | Single installable item |

## Registry items

**67 components** — full official shadcn/ui catalog plus CoreCN custom items.

### UI primitives (61)

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `attachment`, `avatar`, `badge`, `brand-button`, `breadcrumb`, `bubble`, `button`, `button-group`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `combobox`, `command`, `context-menu`, `dialog`, `direction`, `drawer`, `dropdown-menu`, `empty`, `field`, `form`, `hover-card`, `input`, `input-group`, `input-otp`, `item`, `kbd`, `label`, `marker`, `menubar`, `message`, `message-scroller`, `native-select`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `skeleton`, `slider`, `sonner`, `spinner`, `switch`, `table`, `tabs`, `textarea`, `toggle`, `toggle-group`, `tooltip`

### Blocks (2)

| Item | Description |
|------|-------------|
| `sidebar` | Composable app sidebar |
| `stat-card` | CoreCN dashboard metric card |

### Examples (4)

`hello-world`, `example-form`, `complex-component`, `example-with-css`

Source definitions live in [`registry.json`](registry.json). Component source is under [`registry/corecn/`](registry/corecn/).

## Install in another project

### Option A — Namespace (recommended)

```bash
npx shadcn@latest registry add @corecn=https://corecn.vercel.app/r/{name}.json
npx shadcn@latest add @corecn/dialog
npx shadcn@latest add @corecn/sidebar
npx shadcn@latest add @corecn/stat-card
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
npx shadcn@latest add https://corecn.vercel.app/r/dialog.json
```

### Local testing

With the registry served on port 3000 (e.g. `npm run dev` or `npx serve public -l 3000`):

```bash
npx shadcn@latest registry add @corecn=http://localhost:3000/r/{name}.json
npx shadcn@latest add @corecn/dialog
```

A working consumer example is in [`examples/consumer-test/`](examples/consumer-test/).

## Adding or updating components

1. Add or edit source under `registry/corecn/ui/` (primitive) or `registry/corecn/blocks/<name>/` (block).
2. Run `npm run registry:generate` to refresh [`registry.json`](registry.json), or edit it manually.
3. Run `npm run registry:build`.
4. Test: `npx shadcn@latest view https://corecn.vercel.app/r/<name>.json` and `npx shadcn@latest add @corecn/<name>` from a consumer app.

To bulk-sync with upstream shadcn:

```bash
npx shadcn@latest add --all -y --overwrite --path registry/corecn/ui
npm run registry:generate
npm run registry:build
```

## Deploy to production

This project is a Next.js app; registry JSON in `public/r/` is deployed as static assets.

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Build command: `npm run build` (`prebuild` runs `registry:build` automatically).
4. Production URL: `https://corecn.vercel.app`

### Other hosts

Any static host works if you upload the contents of `public/r/` under `/r/`, or deploy the full Next.js app.

## Component props reference

See [docs/props.md](docs/props.md) for props, variants, and inherited attributes for every registry component.

Regenerate after source changes:

```bash
npm run docs:props
```

## Project structure

```
registry.json              # Source catalog (67 items)
registry/corecn/ui/        # All shadcn UI primitives (62 files)
registry/corecn/blocks/    # Blocks + examples
public/r/                  # Built JSON (generated — commit for static deploy)
docs/props.md              # Generated props reference (npm run docs:props)
scripts/                   # generate-registry-json, generate-props-docs
components.json            # shadcn config for this repo
examples/consumer-test/    # Sample app that installs from @corecn
```

## License

MIT (same as upstream [registry-template](https://github.com/shadcn-ui/registry-template)).
