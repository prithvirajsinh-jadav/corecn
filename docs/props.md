# CoreCN Component Props Reference

Generated from registry source. Regenerate with `npm run docs:props`.

**63 components** in the @corecn registry.

Install any component: `npx shadcn add @corecn/<name>`

---

## Forms & Inputs

### Button

<!-- todo: props-button -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | "default" |  |
| `size` | `"default" \| "xs" \| "sm" \| "lg" \| "icon"` | "default" |  |

**Inherited props:** All standard `<button>` HTML attributes

**Exports:** `Button`, `buttonVariants`

### Input

<!-- todo: props-input -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<input>` HTML attributes

**Exports:** `Input`

### Textarea

<!-- todo: props-textarea -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<textarea>` HTML attributes

**Exports:** `Textarea`

### Label

<!-- todo: props-label -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Label`

### Field

<!-- todo: props-field -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `orientation` | `"vertical" \| "horizontal" \| "responsive"` | "vertical" |  |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Field`, `FieldLabel`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldLegend`, `FieldSeparator`, `FieldSet`, `FieldContent`, `FieldTitle`

### Form

<!-- todo: props-form -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `useFormField`, `Form`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`, `FormField`

### Checkbox

<!-- todo: props-checkbox -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Checkbox`

### Radio Group

<!-- todo: props-radio-group -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `RadioGroup`, `RadioGroupItem`

### Switch

<!-- todo: props-switch -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Switch`

### Select

<!-- todo: props-select -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |

**Inherited props:** All Radix primitive props for this component

**Exports:** `Select`, `SelectContent`, `SelectGroup`, `SelectItem`, `SelectLabel`, `SelectScrollDownButton`, `SelectScrollUpButton`, `SelectSeparator`, `SelectTrigger`, `SelectValue`

### Native Select

<!-- todo: props-native-select -->

No custom props beyond standard HTML/React attributes.

**Exports:** `NativeSelect`, `NativeSelectOptGroup`, `NativeSelectOption`

### Combobox

<!-- todo: props-combobox -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |

**Exports:** `Combobox`, `ComboboxInput`, `ComboboxContent`, `ComboboxList`, `ComboboxItem`, `ComboboxGroup`, `ComboboxLabel`, `ComboboxCollection`, `ComboboxEmpty`, `ComboboxSeparator`, `ComboboxChips`, `ComboboxChip`, `ComboboxChipsInput`, `ComboboxTrigger`, `ComboboxValue`, `useComboboxAnchor`

### Slider

<!-- todo: props-slider -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Slider`

### Calendar

<!-- todo: props-calendar -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** Props from the underlying primitive component

**Exports:** `Calendar`, `CalendarDayButton`

### Input Otp

<!-- todo: props-input-otp -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator`

### Input Group

<!-- todo: props-input-group -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<input>` HTML attributes

**Exports:** `InputGroup`, `InputGroupAddon`, `InputGroupButton`, `InputGroupText`, `InputGroupInput`, `InputGroupTextarea`

### Toggle

<!-- todo: props-toggle -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `"default" \| "outline"` | "default" |  |
| `size` | `"default" \| "sm" \| "lg"` | "default" |  |

**Inherited props:** All Radix primitive props for this component

**Exports:** `Toggle`, `toggleVariants`

### Toggle Group

<!-- todo: props-toggle-group -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `ToggleGroup`, `ToggleGroupItem`

### Button Group

<!-- todo: props-button-group -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |
| `orientation` | `"horizontal" \| "vertical"` | "horizontal" |  |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `ButtonGroup`, `ButtonGroupSeparator`, `ButtonGroupText`, `buttonGroupVariants`

## Layout & Navigation

### Card

<!-- todo: props-card -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardAction`, `CardDescription`, `CardContent`

### Accordion

<!-- todo: props-accordion -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`

### Tabs

<!-- todo: props-tabs -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `"default" \| "line"` | "default" |  |

**Inherited props:** All Radix primitive props for this component

**Exports:** `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `tabsListVariants`

### Separator

<!-- todo: props-separator -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Separator`

### Scroll Area

<!-- todo: props-scroll-area -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `ScrollArea`, `ScrollBar`

### Resizable

<!-- todo: props-resizable -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Exports:** `ResizableHandle`, `ResizablePanel`, `ResizablePanelGroup`

### Sidebar

<!-- todo: props-sidebar -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |
| `variant` | `"default" \| "outline"` | "default" |  |
| `size` | `"default" \| "sm" \| "lg"` | "default" |  |

**Inherited props:** All standard `<button>` HTML attributes

**Exports:** `Sidebar`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupAction`, `SidebarGroupContent`, `SidebarGroupLabel`, `SidebarHeader`, `SidebarInput`, `SidebarInset`, `SidebarMenu`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuButton`, `SidebarMenuItem`, `SidebarMenuSkeleton`, `SidebarMenuSub`, `SidebarMenuSubButton`, `SidebarMenuSubItem`, `SidebarProvider`, `SidebarRail`, `SidebarSeparator`, `SidebarTrigger`, `useSidebar`

### Breadcrumb

<!-- todo: props-breadcrumb -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |

**Exports:** `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis`

### Navigation Menu

<!-- todo: props-navigation-menu -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuContent`, `NavigationMenuTrigger`, `NavigationMenuLink`, `NavigationMenuIndicator`, `NavigationMenuViewport`, `navigationMenuTriggerStyle`

### Menubar

<!-- todo: props-menubar -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Menubar`, `MenubarPortal`, `MenubarMenu`, `MenubarTrigger`, `MenubarContent`, `MenubarGroup`, `MenubarSeparator`, `MenubarLabel`, `MenubarItem`, `MenubarShortcut`, `MenubarCheckboxItem`, `MenubarRadioGroup`, `MenubarRadioItem`, `MenubarSub`, `MenubarSubTrigger`, `MenubarSubContent`

### Pagination

<!-- todo: props-pagination -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** Props from the underlying primitive component

**Exports:** `Pagination`, `PaginationContent`, `PaginationLink`, `PaginationItem`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`

### Aspect Ratio

<!-- todo: props-aspect-ratio -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `AspectRatio`

### Direction

<!-- todo: props-direction -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** Props from the underlying primitive component

**Exports:** `DirectionProvider`, `useDirection`

## Overlays & Menus

### Dialog

<!-- todo: props-dialog -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Dialog`, `DialogClose`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogOverlay`, `DialogPortal`, `DialogTitle`, `DialogTrigger`

### Alert Dialog

<!-- todo: props-alert-dialog -->

> Requires `"use client"`

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `AlertDialog`, `AlertDialogAction`, `AlertDialogCancel`, `AlertDialogContent`, `AlertDialogDescription`, `AlertDialogFooter`, `AlertDialogHeader`, `AlertDialogMedia`, `AlertDialogOverlay`, `AlertDialogPortal`, `AlertDialogTitle`, `AlertDialogTrigger`

### Drawer

<!-- todo: props-drawer -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Drawer`, `DrawerPortal`, `DrawerOverlay`, `DrawerTrigger`, `DrawerClose`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`

### Sheet

<!-- todo: props-sheet -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Sheet`, `SheetTrigger`, `SheetClose`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`

### Popover

<!-- todo: props-popover -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverAnchor`, `PopoverHeader`, `PopoverTitle`, `PopoverDescription`

### Tooltip

<!-- todo: props-tooltip -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider`

### Hover Card

<!-- todo: props-hover-card -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `HoverCard`, `HoverCardTrigger`, `HoverCardContent`

### Dropdown Menu

<!-- todo: props-dropdown-menu -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `DropdownMenu`, `DropdownMenuPortal`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuGroup`, `DropdownMenuLabel`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuSub`, `DropdownMenuSubTrigger`, `DropdownMenuSubContent`

### Context Menu

<!-- todo: props-context-menu -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `ContextMenu`, `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuItem`, `ContextMenuCheckboxItem`, `ContextMenuRadioItem`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuShortcut`, `ContextMenuGroup`, `ContextMenuPortal`, `ContextMenuSub`, `ContextMenuSubContent`, `ContextMenuSubTrigger`, `ContextMenuRadioGroup`

### Command

<!-- todo: props-command -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandShortcut`, `CommandSeparator`

### Collapsible

<!-- todo: props-collapsible -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`

## Feedback & Status

### Alert

<!-- todo: props-alert -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `"default" \| "destructive"` | "default" |  |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Alert`, `AlertTitle`, `AlertDescription`

### Sonner

<!-- todo: props-sonner -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Exports:** `Toaster`

### Progress

<!-- todo: props-progress -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `Progress`

### Skeleton

<!-- todo: props-skeleton -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Skeleton`

### Badge

<!-- todo: props-badge -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline" \| "ghost" \| "link"` | "default" |  |

**Exports:** `Badge`, `badgeVariants`

### Spinner

<!-- todo: props-spinner -->

No custom props beyond standard HTML/React attributes.

**Exports:** `Spinner`

## Display & Data

### Table

<!-- todo: props-table -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Exports:** `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, `TableCaption`

### Avatar

<!-- todo: props-avatar -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Avatar`, `AvatarImage`, `AvatarFallback`, `AvatarBadge`, `AvatarGroup`, `AvatarGroupCount`

### Carousel

<!-- todo: props-carousel -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `CarouselApi`, `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`

### Chart

<!-- todo: props-chart -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent`, `ChartStyle`

### Empty

<!-- todo: props-empty -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `"default" \| "icon"` | "default" |  |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Empty`, `EmptyHeader`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`, `EmptyMedia`

### Item

<!-- todo: props-item -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |
| `variant` | `"default" \| "outline" \| "muted"` | "default" |  |
| `size` | `"default" \| "sm"` | "default" |  |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Item`, `ItemMedia`, `ItemContent`, `ItemActions`, `ItemGroup`, `ItemSeparator`, `ItemTitle`, `ItemDescription`, `ItemHeader`, `ItemFooter`

### Kbd

<!-- todo: props-kbd -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Kbd`, `KbdGroup`

## Chat UI

### Bubble

<!-- todo: props-bubble -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |
| `variant` | `"default" \| "secondary" \| "muted" \| "tinted" \| "outline" \| "ghost" \| "destructive"` | "default" |  |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `BubbleGroup`, `Bubble`, `BubbleContent`, `BubbleReactions`

### Message

<!-- todo: props-message -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `MessageGroup`, `Message`, `MessageAvatar`, `MessageContent`, `MessageFooter`, `MessageHeader`

### Message Scroller

<!-- todo: props-message-scroller -->

> Requires `"use client"`

No custom props beyond standard HTML/React attributes.

**Inherited props:** All Radix primitive props for this component

**Exports:** `MessageScrollerProvider`, `MessageScroller`, `MessageScrollerViewport`, `MessageScrollerContent`, `MessageScrollerItem`, `MessageScrollerButton`, `useMessageScroller`, `useMessageScrollerScrollable`, `useMessageScrollerVisibility`

### Attachment

<!-- todo: props-attachment -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |
| `size` | `"default" \| "sm" \| "xs"` | — |  |
| `orientation` | `"horizontal" \| "vertical"` | — |  |
| `variant` | `"icon" \| "image"` | "icon" |  |

**Inherited props:** All standard `<button>` HTML attributes

**Exports:** `Attachment`, `AttachmentGroup`, `AttachmentMedia`, `AttachmentContent`, `AttachmentTitle`, `AttachmentDescription`, `AttachmentActions`, `AttachmentAction`, `AttachmentTrigger`

### Marker

<!-- todo: props-marker -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `asChild` | `boolean` | false | Merge props onto child via Slot |

**Inherited props:** All standard `<div>` HTML attributes

**Exports:** `Marker`, `MarkerIcon`, `MarkerContent`, `markerVariants`

## CoreCN Custom

### Brand Button

<!-- todo: props-brand-button -->

No custom props beyond standard HTML/React attributes.

**Inherited props:** Props from the underlying primitive component

### Stat Card

<!-- todo: props-stat-card -->

**Custom props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `title` | `string` | — | required |
| `value` | `string` | — | required |
| `description` | `string` | — | optional |
| `trend` | `string` | — | optional |
| `className` | `string` | — | optional |

---

*Last generated: 2026-06-30T14:20:06.978Z*
