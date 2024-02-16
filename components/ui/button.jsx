import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-300 ease-in-out -tracking-tighter",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-250 ",
        destructive: "bg-red-500 text-white hover:bg-red-500/80",
        outline:
          "border border-primary-500 bg-white hover:bg-primary-250 hover:text-white",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-250",
      },
      size: {
        default: "h-10 px-4 pt-[1.4rem] pb-[1.2rem]",
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

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
