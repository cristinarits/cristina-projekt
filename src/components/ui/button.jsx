import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/gameUtils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xl chewy-regular transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-purple-300 text-purple-900 hover:bg-purple-400 focus:ring-purple-400",
        destructive: "bg-rose-300 text-rose-900 hover:bg-rose-400 focus:ring-rose-400",
        outline: "border border-purple-300 text-purple-900 bg-white hover:bg-purple-100 focus:ring-purple-200",
        secondary: "bg-violet-200 text-violet-900 hover:bg-violet-300 focus:ring-violet-300",
        ghost: "bg-transparent text-purple-700 hover:bg-purple-100 focus:ring-purple-200",
        link: "text-purple-700 hover:underline underline-offset-4",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };