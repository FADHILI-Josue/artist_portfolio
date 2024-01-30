import * as React from "react"
import { cn } from "../../lib/utils"


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className,id, label, type, ...props }, ref) => {
        return (
            <div className="flex text-start flex-col gap-1">
                <label className="text-light-gold" htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type={type}
                    className={cn(
                        "flex h-10 w-full placeholder-stone-800 dark:placeholder-stone-500 rounded-sm border-b bg-black/50 dark:bg-black/20 px-3 py-2 text-sm  placeholder:text-muted-foreground focus:bg-stone-500/10 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
