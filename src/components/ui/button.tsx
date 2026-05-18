import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex max-w-full min-w-0 items-center justify-center gap-2 whitespace-normal rounded-full text-center text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9914f] disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#171211] text-white hover:bg-[#3a2f2b]",
        outline:
          "border border-[#d9c9b8] bg-white/70 text-[#171211] hover:border-[#b9914f] hover:bg-[#fff7ef]",
        ghost: "text-[#171211] hover:bg-[#fff1f4]",
        gold: "bg-[#c69b46] text-[#171211] hover:bg-[#d8b768]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        lg: "h-13 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
