import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { BrandButton } from "@/registry/corecn/ui/brand-button"
import { StatCard } from "@/registry/corecn/blocks/stat-card/stat-card"
import { HelloWorld } from "@/registry/corecn/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/corecn/blocks/example-form/example-form"
import PokemonPage from "@/registry/corecn/blocks/complex-component/page"
import { ExampleCard } from "@/registry/corecn/blocks/example-with-css/example-card"
import { ButtonPreview } from "@/app/button-preview"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">CoreCN Registry</h1>
        <p className="text-muted-foreground">
          Custom UI on shadcn — install with{" "}
          <code className="text-sm">npx shadcn add @corecn/stat-card</code>
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              CoreCN stat card and brand button
            </h2>
            <div className="flex gap-2">
              <OpenInV0Button name="stat-card" className="w-fit" />
              <OpenInV0Button name="brand-button" className="w-fit" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 p-4">
            <StatCard
              title="Active users"
              value="12,480"
              description="Last 30 days"
              trend="+8.2%"
            />
            <StatCard
              title="Revenue"
              value="$84.2k"
              description="Month to date"
              trend="+3.1%"
            />
          </div>
          <div className="flex justify-center pb-4">
            <BrandButton>Get started with CoreCN</BrandButton>
          </div>
        </div>

        <div
          id="button-preview"
          className="flex flex-col gap-4 border rounded-lg p-4 relative"
        >
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Button loading and icon props
          </h2>
          <ButtonPreview />
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <HelloWorld />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A login form with a CSS file.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExampleCard />
          </div>
        </div>
      </main>
    </div>
  )
}
