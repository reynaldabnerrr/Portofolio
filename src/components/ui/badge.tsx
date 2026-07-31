import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
        cyan:
          "border-transparent bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        purple:
          "border-transparent bg-purple-500/20 text-purple-300 border-purple-500/30",
        pink:
          "border-transparent bg-pink-500/20 text-pink-300 border-pink-500/30",
        secondary:
          "border-transparent bg-white/10 text-gray-200 hover:bg-white/20",
        destructive:
          "border-transparent bg-red-500/20 text-red-300 border-red-500/30",
        outline: "text-foreground border-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
