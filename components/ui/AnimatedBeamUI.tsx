"use client";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import IconAuto from "@/public/assets/svg/auto-black.svg";
import { GrUserAdmin } from "react-icons/gr";
import { Reveal } from "../animation/Reveal";

// Icons component
const Icons = {
  shield1: () => <IoShieldCheckmarkOutline className="w-14 h-auto text-black-100" />,
  shield2: () => <IoShieldCheckmarkOutline className="w-14 h-auto text-black-100" />,
  shield3: () => <IoShieldCheckmarkOutline className="w-14 h-auto text-black-100" />,
  shield4: () => <IoShieldCheckmarkOutline className="w-14 h-auto text-black-100" />,
  police: () => <RiPoliceBadgeFill className="w-14 h-auto text-black-100" />,
  user: () => <GrUserAdmin className="w-14 h-auto text-black-100" />,
  auto: () => <Image width={28} height={28} priority alt="auto" src={IconAuto} />,
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
          <div className="flex flex-col justify-center items-center">
            <Circle ref={refs[5]} className="size-16 bg-white">
              <Icons.auto />
            </Circle>
          </div>
          <div className="flex flex-col justify-center gap-2">
            {["shield1", "shield2", "police", "shield3", "shield4"].map((icon, index) => (
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
