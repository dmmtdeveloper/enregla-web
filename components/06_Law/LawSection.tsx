"use client";
import Link from "next/link";
import clsx from "clsx";
import { MovingBorderDemo } from "@/components/ui/buttons/ButtonMoving";
import { AnimatedBeamMultipleOutputUI } from "@/components/ui/AnimatedBeamUI";
import { paragrapsLaw } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { Reveal } from "../animation/Reveal";

export const LawSection = () => {
  const { ref } = useSectionInView("Ley 21.601", 0.5);

  return (
    <Reveal>
      <section
        id="ley"
        ref={ref}
        className="flex lg:flex-row md:flex-row flex-col mt-0 xl:px-32  dark:bg-black-100 scroll-mt-24 xl:scroll-m-28 xl:mb-32 lg:mb-32 mb-32"
      >
        <div className=" lg:w-1/2 xl:w-1/2 flex flex-col w-full items-center justify-center">
          <AnimatedBeamMultipleOutputUI />
        </div>

        <div
          className={clsx("flex pt-10 items-start", "flex-1 flex-col px-8", "pt-10 xl:p-20 w-full")}
        >
          <Reveal>
            <h2 className=" text-left 2xl:max-w-[500px] 2xl:text-left  font-display mb-2 text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] text-black-100 dark:text-slate-200 font-gradient-white ">
              Conoce más acerca de la ley 21.601
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-left text-gray-500 text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 dark:text-slate-300 font-normal text-black-200 2xl:text-left lg:text-left pb-8">
              {paragrapsLaw.paragraph}
            </p>
          </Reveal>

          <Link className="w-full" href="/faq-grabado-patentes">
            <MovingBorderDemo title="Conoce más" />
          </Link>
        </div>
      </section>
    </Reveal>
  );
};
