import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-soft",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline:
          "border-2 border-primary bg-card hover:bg-primary hover:text-primary-foreground rounded-full",
        secondary:
          "bg-accent text-accent-foreground hover:bg-accent/90 rounded-full shadow-button font-semibold",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        // Variantes específicas da Petiska & Gatão
        hero: "bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-4 text-base font-bold shadow-button hover:shadow-lg transform hover:scale-105 transition-all duration-300",
        petshop: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 font-semibold shadow-soft border-2 border-primary hover:border-primary/80",
        community: "bg-gradient-accent text-white hover:bg-accent/90 rounded-full px-6 py-3 font-semibold shadow-button",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 py-3",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
