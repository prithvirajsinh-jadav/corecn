import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type StatCardProps = {
  title: string
  value: string
  description?: string
  trend?: string
  className?: string
}

export function StatCard({
  title,
  value,
  description,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("border-primary/20 bg-card/80 backdrop-blur", className)}>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl font-bold tabular-nums">{value}</CardTitle>
      </CardHeader>
      {(description || trend) && (
        <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
          {description ? <span>{description}</span> : <span />}
          {trend ? (
            <span className="font-medium text-primary">{trend}</span>
          ) : null}
        </CardContent>
      )}
    </Card>
  )
}
