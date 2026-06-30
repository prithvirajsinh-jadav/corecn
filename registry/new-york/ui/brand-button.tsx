import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/corecn/ui/button"

export function BrandButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "rounded-full font-semibold tracking-tight shadow-md",
        className
      )}
      {...props}
    />
  )
}
