import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[4px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none hover:cursor-pointer",
  {
    variants: {
      variant: {
        // 🔥 MAIN CTA (booking)
        primary:"bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",

        // secondary (less important actions)
        secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",

        // outline (minimal)
        outline: "border border-border bg-transparent hover:bg-muted",

        // ghost (navbar links)
        ghost: "hover:bg-muted text-foreground",

        // WhatsApp CTA (high conversion)
        whatsapp:
          "bg-green-600 text-white shadow-md hover:bg-green-700 hover:shadow-lg",

        // call CTA
        call: "bg-black text-white hover:bg-black/80",

        // destructive (rare)
        destructive: "bg-destructive text-white hover:bg-destructive/90",
      },

      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg", // 🔥 hero button
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
