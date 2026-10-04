"use client"

import * as React from "react"
import { MailIcon } from "lucide-react"

import { Button } from "@/registry/corecn/ui/button"

export function ButtonPreview() {
  const [loading, setLoading] = React.useState(false)
  const [clicks, setClicks] = React.useState(0)

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button icon={<MailIcon />}>Email</Button>
        <Button icon={<MailIcon />} iconPlacement="end">
          Email
        </Button>
        <Button icon={<MailIcon />} aria-label="Send email" size="icon" />
        <Button loading>Saving</Button>
        <Button loading loadingText="Saving...">
          Save
        </Button>
        <Button loading icon={<MailIcon />}>
          Send
        </Button>
        <Button disabled loading>
          Disabled wins
        </Button>
        <Button asChild>
          <a href="#button-preview">As child</a>
        </Button>
        <Button
          loading={loading}
          loadingText="Working..."
          onClick={() => {
            setClicks((count) => count + 1)
            setLoading(true)
            window.setTimeout(() => setLoading(false), 1500)
          }}
        >
          Run action
        </Button>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Action clicks: {clicks}
      </p>
    </div>
  )
}
