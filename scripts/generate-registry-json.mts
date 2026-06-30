import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const UI_DIR = path.join(ROOT, "registry/corecn/ui")
const BLOCKS_DIR = path.join(ROOT, "registry/corecn/blocks")

const NPM_DEPS = new Set([
  "zod",
  "react-hook-form",
  "@hookform/resolvers",
  "recharts",
  "cmdk",
  "vaul",
  "sonner",
  "embla-carousel-react",
  "react-day-picker",
  "input-otp",
  "react-resizable-panels",
  "date-fns",
  "next-themes",
])

const SKIP_UI_FILES = new Set(["use-mobile.ts"])

const CUSTOM_UI = new Set(["brand-button"])

const BLOCK_ITEMS: Array<{
  name: string
  type: string
  title: string
  description: string
  registryDependencies?: string[]
  dependencies?: string[]
  files: Array<{ path: string; type: string; target?: string }>
}> = [
  {
    name: "stat-card",
    type: "registry:block",
    title: "Stat Card",
    description: "Dashboard metric card with title, value, and optional trend.",
    registryDependencies: ["card"],
    files: [
      {
        path: "registry/corecn/blocks/stat-card/stat-card.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "hello-world",
    type: "registry:component",
    title: "Hello World",
    description: "A simple hello world component",
    registryDependencies: ["button"],
    files: [
      {
        path: "registry/corecn/blocks/hello-world/hello-world.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "example-form",
    type: "registry:component",
    title: "Example Form",
    description: "A contact form with Zod validation.",
    dependencies: ["zod"],
    registryDependencies: ["button", "input", "label", "textarea", "card"],
    files: [
      {
        path: "registry/corecn/blocks/example-form/example-form.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "complex-component",
    type: "registry:component",
    title: "Complex Component",
    description: "A complex component showing hooks, libs and components.",
    registryDependencies: ["card"],
    files: [
      {
        path: "registry/corecn/blocks/complex-component/page.tsx",
        type: "registry:page",
        target: "app/pokemon/page.tsx",
      },
      {
        path: "registry/corecn/blocks/complex-component/components/pokemon-card.tsx",
        type: "registry:component",
      },
      {
        path: "registry/corecn/blocks/complex-component/components/pokemon-image.tsx",
        type: "registry:component",
      },
      {
        path: "registry/corecn/blocks/complex-component/lib/pokemon.ts",
        type: "registry:lib",
      },
      {
        path: "registry/corecn/blocks/complex-component/hooks/use-pokemon.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "example-with-css",
    type: "registry:component",
    title: "Example with CSS",
    description: "A login form with a CSS file.",
    files: [
      {
        path: "registry/corecn/blocks/example-with-css/example-card.tsx",
        type: "registry:component",
      },
      {
        path: "registry/corecn/blocks/example-with-css/example-card.css",
        type: "registry:component",
      },
    ],
  },
]

const SIDEBAR_EXTRA_FILES = [
  {
    path: "registry/corecn/ui/use-mobile.ts",
    type: "registry:hook",
  },
]

function titleCase(name: string) {
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

function parseDeps(content: string, selfName: string) {
  const registryDependencies = new Set<string>()
  const dependencies = new Set<string>()

  for (const match of content.matchAll(
    /from ["']@\/registry\/corecn\/ui\/([a-z0-9-]+)["']/g
  )) {
    const dep = match[1]
    if (dep !== selfName) registryDependencies.add(dep)
  }

  for (const match of content.matchAll(/from ["']([^"']+)["']/g)) {
    const pkg = match[1]
    if (pkg.startsWith("@/") || pkg.startsWith(".") || pkg.startsWith("react")) continue
    const root = pkg.startsWith("@") ? pkg.split("/").slice(0, 2).join("/") : pkg.split("/")[0]
    if (NPM_DEPS.has(root) || NPM_DEPS.has(pkg)) dependencies.add(root in Object.fromEntries([...NPM_DEPS].map(d => [d,d])) ? root : pkg)
    if (NPM_DEPS.has(root)) dependencies.add(root)
    else if (NPM_DEPS.has(pkg)) dependencies.add(pkg)
  }


  return {
    registryDependencies: [...registryDependencies].sort(),
    dependencies: [...dependencies].sort(),
  }
}

function buildUiItem(filename: string) {
  const name = filename.replace(/\.tsx$/, "")
  const filePath = `registry/corecn/ui/${filename}`
  const content = fs.readFileSync(path.join(UI_DIR, filename), "utf8")
  const { registryDependencies, dependencies } = parseDeps(content, name)

  const item: Record<string, unknown> = {
    name,
    type: name === "sidebar" ? "registry:block" : "registry:ui",
    title: titleCase(name),
    description: CUSTOM_UI.has(name)
      ? `CoreCN ${titleCase(name)} built on shadcn/ui.`
      : `CoreCN ${titleCase(name)} primitive built on shadcn/ui.`,
    files: [{ path: filePath, type: name === "sidebar" ? "registry:component" : "registry:ui" }],
  }

  if (name === "sidebar") {
    item.files = [
      { path: filePath, type: "registry:component" },
      ...SIDEBAR_EXTRA_FILES,
    ]
  }

  if (registryDependencies.length) item.registryDependencies = registryDependencies
  if (dependencies.length) item.dependencies = dependencies

  return item
}

const uiFiles = fs
  .readdirSync(UI_DIR)
  .filter((f) => f.endsWith(".tsx") && !SKIP_UI_FILES.has(f))
  .sort()

const uiItems = uiFiles.map(buildUiItem)
const blockNames = new Set(BLOCK_ITEMS.map((b) => b.name))
const mergedUiItems = uiItems.filter((item) => !blockNames.has(item.name as string))

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "corecn",
  homepage: "https://corecn.vercel.app",
  items: [...mergedUiItems, ...BLOCK_ITEMS],
}

fs.writeFileSync(
  path.join(ROOT, "registry.json"),
  JSON.stringify(registry, null, 2) + "\n"
)

console.log(`Generated registry.json with ${registry.items.length} items`)
