import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { Spinner } from "@/registry/corecn/ui/spinner"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonOwnProps = {
  asChild?: boolean
  loading?: boolean
  loadingIcon?: React.ReactNode
  loadingText?: string
  icon?: React.ReactNode
  iconPlacement?: "start" | "end"
}

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  ButtonOwnProps

type IconOnlyNameProps =
  | { "aria-label": string; "aria-labelledby"?: never }
  | { "aria-labelledby": string; "aria-label"?: never }

type ButtonIconOnlyProps = Omit<ButtonProps, "icon" | "children" | "loadingText"> &
  IconOnlyNameProps & {
    icon: React.ReactNode
    children?: undefined
    loadingText?: undefined
  }

function DefaultLoadingIcon() {
  return (
    <Spinner aria-hidden="true" aria-label={undefined} role="presentation" />
  )
}

function ButtonAdornment({
  placement,
  children,
}: {
  placement: "start" | "end"
  children: React.ReactNode
}) {
  return (
    <span
      data-slot="button-icon"
      data-icon={placement === "end" ? "inline-end" : "inline-start"}
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center"
    >
      {children}
    </span>
  )
}

/**
 * Button with optional `icon` and `loading` UI.
 *
 * - `disabled` wins over `loading`: native disabled, no `aria-busy`, no spinner.
 * - `loadingIcon` / `loadingText` have no effect unless `loading` is true.
 * - While loading: `aria-busy`, `aria-disabled`, `pointer-events-none`, and
 *   `type="button"` so a submit control cannot post the form. Focus stays in
 *   tab order. `onClick` is not intercepted here (this file stays a Server
 *   Component); gate the handler with `loading` at the call site.
 * - No `aria-live`: `aria-busy` is enough. A live region would re-announce the
 *   control whenever loading toggles.
 * - `asChild`: icon/spinner/`loadingText` are injected into the slotted child's
 *   children via `Slot.Slottable` so Radix still receives a single host element.
 * - Icon-only (`icon` with no `children` / `loadingText`) requires `aria-label`
 *   or `aria-labelledby`.
 */
function Button(props: ButtonIconOnlyProps): React.JSX.Element
function Button(props: ButtonProps): React.JSX.Element
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  loading = false,
  loadingIcon,
  loadingText,
  icon,
  iconPlacement = "start",
  disabled,
  children,
  type,
  "aria-busy": ariaBusy,
  "aria-disabled": ariaDisabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"
  const isDisabled = Boolean(disabled)
  const isLoading = Boolean(loading) && !isDisabled
  const adornment = isLoading ? (loadingIcon ?? <DefaultLoadingIcon />) : icon
  const placement = icon ? iconPlacement : "start"
  const replaceSlottedLabel = isLoading && loadingText != null
  const label = replaceSlottedLabel ? loadingText : children
  const slottedChild =
    asChild && replaceSlottedLabel && React.isValidElement(children)
      ? React.cloneElement(
          children as React.ReactElement<{ children?: React.ReactNode }>,
          undefined,
          loadingText
        )
      : children
  const injectSlotContent = asChild && (Boolean(adornment) || replaceSlottedLabel)

  const content = (
    <>
      {adornment && placement === "start" ? (
        <ButtonAdornment placement="start">{adornment}</ButtonAdornment>
      ) : null}
      {asChild ? <Slot.Slottable>{slottedChild}</Slot.Slottable> : label}
      {adornment && placement === "end" ? (
        <ButtonAdornment placement="end">{adornment}</ButtonAdornment>
      ) : null}
    </>
  )

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-loading={isLoading ? "true" : undefined}
      data-icon-placement={adornment ? placement : undefined}
      className={cn(
        buttonVariants({ variant, size, className }),
        isLoading && "pointer-events-none"
      )}
      disabled={isDisabled || undefined}
      aria-busy={isLoading ? true : ariaBusy}
      aria-disabled={isLoading ? true : ariaDisabled}
      type={asChild ? type : isLoading ? "button" : type}
      {...props}
    >
      {asChild && !injectSlotContent ? children : content}
    </Comp>
  )
}

export { Button, buttonVariants }
