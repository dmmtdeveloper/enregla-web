"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import clsx from "clsx";
import Link from "next/link";

type buttonBorderProps = {
  title: string;
};
export function MovingBorderDemo({ title }: buttonBorderProps): JSX.Element {
  return (
    <Link href="/contact">
      <Button
        borderRadius="3rem"
        className={clsx(
          //#3b82fb
          "bg-[#00ED64]",
          "border-neutral-200",
          "shadow-md text-[18px]",
          // "dark:bg-[#014E3D]",
          "dark:border-slate-800",
          "dark:text-black-100"
        )}
      >
        {title}
      </Button>
    </Link>
  );
}
