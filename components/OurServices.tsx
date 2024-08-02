import React, { SVGProps } from "react";
import styles, { layout } from "@/lib/style";
import Image from "next/image";
import radarImageWhite from "@/public/assets/img/radarappwhite.png";
import radarImageBlack from "@/public/assets/img/radarappblack.png";
import { MovingBorderDemo } from "./buttons/ButtonMoving";
import { services } from "@/lib/OurServices";
import clsx from "clsx";

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
    <section id="nosotros" className={`${layout.sectionReverse} dark:bg-black-100 flex-col-reverse px-4 scroll-mb-10 xl:scroll-mb-12`}>
      <div className={`${layout.sectionImgReverse} `}>
        <Image
          className="hidden dark:block relative z-[5] w-[500px] h-auto"
          width={640}
          height={721}
          src={radarImageWhite}
          alt="enregla"
          priority={true}
        />
        <Image
          className="dark:hidden relative z-[5] w-[500px] h-auto"
          width={640}
          height={721}
          src={radarImageBlack}
          alt="enregla"
          priority={true}
        />

        {/* modificar gradient!!!!!  */}

        <div className="dark:hidden">
          <div className="absolute z-[1] -left-1/2 top-0 w-[20%] h-[20%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[80%] h-[80%] rounded-full green__gradient" />
        </div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className="font-semibold text-[48px] xl:text-7xl xl:max-w-[700px]  dark:text-white text-black-100 xl:leading-[76.8px] leading-[50px] w-full mb-8">
          ¿Por que{" "}
          <span className="from-[#6FEE8D] to-green bg-clip-text text-transparent bg-gradient-to-b">
            grabar
          </span>{" "}
          tu patente con nosotros?
        </h2>

        <div className="flex flex-col gap-5">
          {services.map((service, index) => (
            <OurServicesCard key={service.id} {...service} index={index} />
          ))}
          <MovingBorderDemo title="Acerca de"></MovingBorderDemo>
        </div>
      </div>
    </section>
  );
};
