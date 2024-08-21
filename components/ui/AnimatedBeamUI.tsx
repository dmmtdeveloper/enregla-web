"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Auto } from "./Auto";
import userIcon from "@/public/assets/svg/user.svg";
import shieldIcon from "@/public/assets/svg/Shield.svg";
import policeIcon from "@/public/assets/svg/police.svg";

// Icons component
const Icons = {
  googleDrive: () => (
    <Image
      className="w-[24px] h-auto"
      width={24}
      height={24}
      priority
      alt="Google Drive"
      src={shieldIcon}
    />
  ),
  googleDocs: () => (
    <Image
      className="w-[24px] h-auto"
      width={24}
      height={24}
      priority
      alt="Google Docs"
      src={shieldIcon}
    />
  ),
  notion: () => (
    <Image
      className="w-[24px] h-auto"
      width={24}
      height={24}
      priority
      alt="Notion"
      src={shieldIcon}
    />
  ),
  whatsapp: () => (
    <Image
      className="w-[24px] h-auto"
      width={24}
      height={24}
      priority
      alt="WhatsApp"
      src={policeIcon}
    />
  ),
  messenger: () => (
    <Image
      className="w-[24px] h-auto"
      width={24}
      height={24}
      priority
      alt="Messenger"
      src={shieldIcon}
    />
  ),
  openai: () => <Auto />,
  zapier: () => (
    <Image
      className="w-[24px] h-auto"
      width={24}
      height={24}
      priority
      alt="Zapier"
      src={shieldIcon}
    />
  ),
  user: () => (
    <Image className="w-[24px] h-auto" width={24} height={24} priority alt="User" src={userIcon} />
  ),
};

// Circle component
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
);

Circle.displayName = "Circle";

// AnimatedBeamMultipleOutputUI component
export function AnimatedBeamMultipleOutputUI({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = Array.from({ length: 7 }, () => useRef<HTMLDivElement>(null));

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center rounded-lg p-10",
        className
      )}
    >
      <div className="flex w-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={refs[6]}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={refs[5]} className="size-16 bg-white dark:bg-black-100">
            <Icons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          {["googleDrive", "googleDocs", "whatsapp", "messenger", "notion"].map((icon, index) => (
            <Circle key={icon} ref={refs[index]}>
              {Icons[icon as keyof typeof Icons]()}
            </Circle>
          ))}
        </div>
      </div>

      {/* AnimatedBeams */}
      {refs.slice(0, 5).map((fromRef, index) => (
        <AnimatedBeam
          key={index}
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={refs[5]}
          duration={3}
        />
      ))}
      <AnimatedBeam containerRef={containerRef} fromRef={refs[5]} toRef={refs[6]} duration={3} />
    </div>
  );
}
