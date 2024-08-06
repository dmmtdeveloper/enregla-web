import React, { SVGProps } from "react";
import styles, { layout } from "@/lib/style";
import Image from "next/image";
import radarImageWhite from "@/public/assets/img/radarappwhite.png";
import radarImageBlack from "@/public/assets/img/radarappblack.png";
import { MovingBorderDemo } from "./buttons/ButtonMoving";
import { services } from "@/lib/OurServices";
import clsx from "clsx";
import { RippleSection } from "./RippleSection";
import Ripple from "./magicui/ripple";
import { Auto } from "./nav/Auto";

type OurServiceProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

const OurServicesCard: React.FC<OurServiceProps> = ({ icon: icon, title, content, index }) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h4 className={clsx("font-semibold", "dark:text-white", "text-black-100", "text-[24px]", "leading-[23px]")}>
          {title}
        </h4>
        <p
          className={clsx(
            "dark:text-slate-400",
            "text-black-100",
            "text-[16px]",
            "leading-[24px]",
            "mb-1",
            "xl:max-w-[600px]"
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export const OurServices = () => {
  return (
    <section
      id="nosotros"
      className={`${layout.sectionReverse} dark:bg-black-100 flex-col-reverse scroll-mb-10 scroll-mt-16 xl:scroll-mt-0 xl:px-32`}
    >
      <div className="flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative flex justify-center items-center">
        <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Auto />
          <Ripple />
        </div>
      </div>

      <div>
        <div className={` flex flex-col  justify-center p-10 xl:p-20  rounded-[60px] xl:rounded-[100px]`}>
          <h2
            className={clsx(
              "font-normal text-[38px]",
              "xl:text-6xl xl:max-w-[700px]",
              "text-black-100",
              "xl:leading-[76.8px] leading-[50px]",
              "w-full mb-8",

              //dark mode
              "dark:text-white"
            )}
          >
            ¿Por que grabar tu patente con <span className="dark:text-green text-green font-semibold">nosotros</span>?
          </h2>

          <div className="flex flex-col gap-5">
            {services.map((service, index) => (
              <OurServicesCard key={service.id} {...service} index={index} />
            ))}
            <MovingBorderDemo title="Acerca de" />
          </div>
        </div>
      </div>
    </section>
  );
};
