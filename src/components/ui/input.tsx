import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full rounded-full border border-[#e3d6cb] bg-white px-4 text-sm text-[#171211] shadow-sm outline-none transition placeholder:text-[#9c8d85] focus:border-[#b9914f] focus:ring-2 focus:ring-[#ead8b6]",
        className,
      )}
      {...props}
    />
  );
}
