"use client";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { MovingBorderDemo } from "@/components/ui/buttons/ButtonMoving";
import { AnimatedBeamMultipleOutputUI } from "@/components/ui/AnimatedBeamUI";
import { ParagraphSection } from "../ui/paragraph/ParagraphSection";
import { paragrapsLaw } from "@/lib/data";
import { TitleLaw } from "../ui/titles/TitleLaw";
import { useSectionInView } from "@/hooks/useSectionInView";

export const LawSection = () => {
  const { ref } = useSectionInView("Ley 21.601", 0.5);

  return (
    <motion.div
      ref={ref}
      id="ley"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="px-8 flex md:flex-row flex-col mt-0 xl:px-32  dark:bg-black-100 scroll-mt-24 xl:scroll-m-28 xl:mb-32"
    >
      <div
        className={clsx(
          "flex pt-10 items-start",
          "flex-1 flex-col",
          "pt-10 xl:p-20",
          "rounded-[60px]",
          "xl:rounded-[100px]"
        )}
      >
        <TitleLaw title="Conoce más acerca de la" text="ley 21.601" />
        <ParagraphSection paragraph={paragrapsLaw.paragraph} />

        <Link href="/FAQ">
          <MovingBorderDemo title="Conoce más" />
        </Link>
      </div>

      <div className=" xl:w-1/2 flex flex-col items-center justify-center">
        <AnimatedBeamMultipleOutputUI />
      </div>
    </motion.div>
  );
};
