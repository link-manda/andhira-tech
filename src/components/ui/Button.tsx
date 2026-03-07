import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility to merge tailwind classes */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-primary text-white hover:bg-primary/90 shadow-md":
        variant === "primary",
      "bg-accent text-white hover:bg-accent-dark shadow-md":
        variant === "secondary",
      "border-2 border-primary text-primary hover:bg-primary hover:text-white":
        variant === "outline",
      "hover:bg-slate-100 text-slate-700": variant === "ghost",
      "h-9 px-4 text-sm": size === "sm",
      "h-11 px-6 text-base min-h-[44px]": size === "md",
      "h-14 px-8 text-lg min-h-[44px]": size === "lg",
    },
    className,
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
