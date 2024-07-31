"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import clsx from "clsx";

type buttonBorderProps = {
  title: string;
};
export function MovingBorderDemo({ title }): React.FC<buttonBorderProps> {
  return (
    <div>
      <Button
        borderRadius="3rem"
        className={clsx(
          "bg-blue-200",
          "border-neutral-200",
          "shadow-md text-[18px]",
          "dark:bg-slate-900",
          "dark:border-slate-800",
          "text-black-100",
          "dark:text-gray-50"
        )}
      >
        {title}
      </Button>
    </div>
  );
}
