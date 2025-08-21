import * as React from "react"
import { cn } from "@/components/lib/utils"

const Button = React.forwardRef(({ className, variant = "primary", size = "default", ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  
  const variantClasses = {
    primary: "bg-white text-[#042136] border border-[#042136] hover:bg-[#042136] hover:text-white shadow",
    link: "text-[#60A5FA] underline-offset-4 hover:underline p-0 h-auto"
  }
  
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant] || variantClasses.primary,
        sizeClasses[size] || sizeClasses.default,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }