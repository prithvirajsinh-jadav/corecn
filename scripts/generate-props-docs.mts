import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const UI_DIR = path.join(ROOT, "registry/corecn/ui")
const BLOCKS_DIR = path.join(ROOT, "registry/corecn/blocks")
const OUT = path.join(ROOT, "docs/props.md")

const SKIP = new Set(["use-mobile.ts"])

const CATEGORIES: Record<string, string[]> = {
  "Forms & Inputs": [
    "button",
    "input",
    "textarea",
    "label",
    "field",
    "form",
    "checkbox",
    "radio-group",
    "switch",
    "select",
    "native-select",
    "combobox",
    "slider",
    "calendar",
    "input-otp",
    "input-group",
    "toggle",
    "toggle-group",
    "button-group",
  ],
  "Layout & Navigation": [
    "card",
    "accordion",
    "tabs",
    "separator",
    "scroll-area",
    "resizable",
    "sidebar",
    "breadcrumb",
    "navigation-menu",
    "menubar",
    "pagination",
    "aspect-ratio",
    "direction",
  ],
  "Overlays & Menus": [
    "dialog",
    "alert-dialog",
    "drawer",
    "sheet",
    "popover",
    "tooltip",
    "hover-card",
    "dropdown-menu",
    "context-menu",
    "command",
    "collapsible",
  ],
  "Feedback & Status": [
    "alert",
    "sonner",
    "progress",
    "skeleton",
    "badge",
    "spinner",
  ],
  "Display & Data": [
    "table",
    "avatar",
    "carousel",
    "chart",
    "empty",
    "item",
    "kbd",
  ],
  "Chat UI": ["bubble", "message", "message-scroller", "attachment", "marker"],
  "CoreCN Custom": ["brand-button", "stat-card"],
}

function titleCase(name: string) {
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

function extractCvaVariants(content: string) {
  const props: Array<{ name: string; type: string; default?: string }> = []
  const variantsMatch = content.match(/variants:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*defaultVariants/)
  if (!variantsMatch) return props

  const block = variantsMatch[1]
  for (const group of block.matchAll(/\n\s{6}(\w+):\s*\{([\s\S]*?)\n\s{6}\}/g)) {
    const key = group[1]
    const inner = group[2]
    const values = [...inner.matchAll(/\n\s{8}(\w+):/g)].map((m) => `"${m[1]}"`)
    if (values.length) props.push({ name: key, type: values.join(" \\| ") })
  }

  const defaultMatch = content.match(/defaultVariants:\s*\{([^}]+)\}/)
  if (defaultMatch) {
    for (const match of defaultMatch[1].matchAll(/(\w+):\s*"([^"]+)"/g)) {
      const prop = props.find((p) => p.name === match[1])
      if (prop) prop.default = `"${match[2]}"`
    }
  }

  return props
}

function extractExplicitType(content: string) {
  const match = content.match(/export type (\w+Props)\s*=\s*\{([^}]+)\}/s)
  if (!match) return []

  return [...match[2].matchAll(/(\w+)(\?)?:\s*([^;\n]+)/g)].map((m) => ({
    name: m[1],
    type: m[3].trim(),
    required: !m[2],
  }))
}

function extractComponentProps(content: string) {
  const props: Array<{ name: string; type: string; default?: string; note?: string }> = []

  if (content.includes("asChild")) {
    props.push({ name: "asChild", type: "boolean", default: "false", note: "Merge props onto child via Slot" })
  }

  const cva = extractCvaVariants(content)
  props.push(...cva)

  const explicit = extractExplicitType(content)
  for (const p of explicit) {
    props.push({ name: p.name, type: p.type, note: p.required ? "required" : "optional" })
  }

  return props
}

function getInheritedProps(content: string) {
  if (content.includes('ComponentProps<"button">')) return "All standard `<button>` HTML attributes"
  if (content.includes('ComponentProps<"input">')) return "All standard `<input>` HTML attributes"
  if (content.includes('ComponentProps<"textarea">')) return "All standard `<textarea>` HTML attributes"
  if (content.includes('ComponentProps<"div">')) return "All standard `<div>` HTML attributes"
  if (content.includes("ComponentProps<typeof") && content.includes("Primitive")) {
    return "All Radix primitive props for this component"
  }
  if (content.includes("ComponentProps<typeof")) return "Props from the underlying primitive component"
  return null
}

function getExports(content: string) {
  const match = content.match(/export \{([^}]+)\}/)
  if (!match) return []
  return match[1].split(",").map((s) => s.trim().split(/\s+/).pop()!).filter(Boolean)
}

function isClientComponent(content: string) {
  return content.startsWith('"use client"') || content.startsWith("'use client'")
}

function renderComponentSection(name: string, filePath: string) {
  const content = fs.readFileSync(filePath, "utf8")
  const props = extractComponentProps(content)
  const inherited = getInheritedProps(content)
  const exports = getExports(content)
  const client = isClientComponent(content)

  let md = `### ${titleCase(name)}\n\n`
  md += `<!-- todo: props-${name} -->\n\n`
  if (client) md += `> Requires \`"use client"\`\n\n`

  if (props.length) {
    md += "**Custom props**\n\n"
    md += "| Prop | Type | Default | Notes |\n|------|------|---------|-------|\n"
    for (const p of props) {
      md += `| \`${p.name}\` | \`${p.type}\` | ${p.default ?? "—"} | ${p.note ?? ""} |\n`
    }
    md += "\n"
  } else {
    md += "No custom props beyond standard HTML/React attributes.\n\n"
  }

  if (inherited) md += `**Inherited props:** ${inherited}\n\n`
  if (exports.length) md += `**Exports:** ${exports.map((e) => `\`${e}\``).join(", ")}\n\n`

  return md
}

function collectComponents() {
  const map = new Map<string, string>()

  for (const file of fs.readdirSync(UI_DIR)) {
    if (!file.endsWith(".tsx") || SKIP.has(file)) continue
    map.set(file.replace(/\.tsx$/, ""), path.join(UI_DIR, file))
  }

  const statCard = path.join(BLOCKS_DIR, "stat-card/stat-card.tsx")
  if (fs.existsSync(statCard)) map.set("stat-card", statCard)

  return map
}

function main() {
  const components = collectComponents()
  const categorized = new Set<string>()
  let md = `# CoreCN Component Props Reference\n\n`
  md += `Generated from registry source. Regenerate with \`npm run docs:props\`.\n\n`
  md += `**${components.size} components** in the @corecn registry.\n\n`
  md += `Install any component: \`npx shadcn add @corecn/<name>\`\n\n---\n\n`

  for (const [category, names] of Object.entries(CATEGORIES)) {
    const present = names.filter((n) => components.has(n))
    if (!present.length) continue

    md += `## ${category}\n\n`
    for (const name of present) {
      md += renderComponentSection(name, components.get(name)!)
      categorized.add(name)
    }
  }

  const uncategorized = [...components.keys()].filter((n) => !categorized.has(n)).sort()
  if (uncategorized.length) {
    md += `## Other\n\n`
    for (const name of uncategorized) {
      md += renderComponentSection(name, components.get(name)!)
    }
  }

  md += `---\n\n*Last generated: ${new Date().toISOString()}*\n`

  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, md)
  console.log(`Wrote ${OUT} (${components.size} components)`)
}

main()
