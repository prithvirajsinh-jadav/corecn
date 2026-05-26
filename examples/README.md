# Examples

## consumer-test

Minimal Next.js app used to verify installing from the `@corecn` registry.

```bash
# From repo root — serve registry JSON
npx serve public -l 3000

# In another terminal
cd examples/consumer-test
npx shadcn@latest add @corecn/stat-card
```

Installed files appear under `src/components/`.
