"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { MovingBorderDemo } from "./buttons/ButtonMoving";
import { AnimatedBeamMultipleOutputUI } from "./ui/AnimatedBeamUI";
import Link from "next/link";

export const LawSection = () => {
  return (
    <motion.div
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
      className="px-4 flex md:flex-row flex-col mt-0 xl:px-32  dark:bg-black-100 scroll-mt-24 xl:scroll-m-28 xl:mb-32"
    >
      <div
        className={clsx(
          "flex pt-10 items-start",
          "flex-1 flex-col",
          "p-10 xl:p-20",
          "rounded-[60px]",
          "xl:rounded-[100px]",
          // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] border",
          // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <h2 className="font-normal text-[38px] xl:text-6xl xl:max-w-[600px] dark:text-white text-black-100 xl:leading-[70px] leading-[50px] w-full mb-4">
          Conoce más acerca de la{" "}
          <span className="from-[#6FEE8D] to-green bg-clip-text text-transparent bg-gradient-to-b font-semibold">
            ley 21.601
          </span>
        </h2>
        <p
          className={clsx(
            "dark:text-slate-400",
            "text-black-100",
            "text-[16px]",
            "leading-[24px]",
            "mb-1 text-justify",
            "xl:max-w-[600px] mb-10"
          )}
        >
          En septiembre del 2023 el Gobierno de Chile promulgó la ley 21.601. Esta ley busca prevenir la venta de
          vehículos robados y la venta de espejos retrovisores entre otros elementos de los vehículos venidos desde el
          mercado no autorizado.
        </p>
        {/* <Button styles="mt-10" /> */}
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

{
  /* <div className={`${layout.sectionImg} flex flex-col items-start pt-16`}>
  {law.map((law, index) => (
    <BenefitsCard key={law.id} {...law} index={index} />
  ))}
</div> */
}
