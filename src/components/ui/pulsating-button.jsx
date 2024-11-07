"use client";;
import React from "react";

import { cn } from "@/lib/utils";

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0e8038",
  duration = "1.5s",
  ...props
}) {
  return (
    (<button
      className={cn(
        "w-64 top-8 relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-[#31ba46] dark:bg-[#128C7E] px-8 py-2 text-lg",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration
        }
      }
      {...props}>
      <div className="relative z-10">{children}</div>
      <div
        className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>)
  );
}
