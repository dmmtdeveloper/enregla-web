"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import clsx from "clsx";


type buttonBorderProps = {
  title: string;
};
export function MovingBorderDemo({ title }: buttonBorderProps): JSX.Element {
  return (
    <Button
      borderRadius="3rem"
      className={clsx(
        //#3b82fb
        "bg-slate-500 text-base leading-6 font-semibold",
        "border-neutral-200 tracking-wide",
        "shadow-md",
        // "dark:bg-[#014E3D]",
        "dark:border-slate-800",
        "text-white"
      )}
    >
      {title}
    </Button>
  );
}
