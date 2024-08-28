import clsx from "clsx";
import { SVGProps } from "react";

import Link from "next/link";
import { ButtonHeroSmall } from "../01_Hero/ButtonHeroSmall";
import { Reveal } from "../animation/Reveal";

type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const BenefitsCard: React.FC<BenefitsProps> = ({ icon: Icon, title, content, index }) => {
  return (
    <Reveal>
      <div
        className={clsx(
          "flex flex-col items-center gap-8 dark:bg-black-200 bg-white dark:shadow-none shadow-slate-400  px-8 py-10 shadow-md  w-full h-full  rounded-[30px]"
        )}
      >
        <div className=" flex flex-col">
          <div className="flex items-center justify-center pb-10">
            <Icon className="icon w-[40px] h-auto object-contain dark:text-white-300 text-slate-500" />
          </div>

          <h4
            className={clsx(
              "font-styling font-display leading-[32px] md:leading-none text-xl 2xl:leading-[130%] dark:text-slate-200 text-black-100"
            )}
          >
            {title}
          </h4>
          <p
            className={clsx(
              "text-sm leading-[1.6] dark:text-slate-300 font-normal text-black-200 text-justify"
            )}
          >
            {content}
          </p>
        </div>

        {/* <Link href="/#contacto">
        <small className="text-black text-[12px] dark:text-white-100 hover:text-green">
          PROTEGE TU VEHICULO AHORA
        </small>
      </Link> */}
        <ButtonHeroSmall />
      </div>
    </Reveal>
  );
};
