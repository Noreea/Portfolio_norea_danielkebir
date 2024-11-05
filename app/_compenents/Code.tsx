import {ComponentPropsWithoutRef} from "react"
import {cn} from "@/lib/utils"

export const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 font-mono text-primary border hover:bg-accent/50 border-accent px-1 py-0.5 rounded-sm", className)} {...props} />
}
