import clsx from "clsx";
import { SVGProps } from "react";

import Link from "next/link";

type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const BenefitsCard: React.FC<BenefitsProps> = ({ icon: Icon, title, content, index }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-8 dark:bg-[#0D0D22] bg-[white] shadow-green  px-8 py-10 drop-shadow-lg  w-full h-full 2xl:h-[420px] lg:h-[350px]  rounded-[30px] justify-between"
      )}
    >
      <div className=" flex flex-col">
        <div className="flex items-center justify-center pb-10">
          <Icon className="icon w-[40px] h-auto object-contain text-[#00ED64]" />
        </div>

        <h4
          className={clsx(
            "font-semibold",
            "dark:text-white",
            "text-black-100",
            "text-[20px]",
            "leading-[23px] pb-4"
          )}
        >
          {title}
        </h4>
        <p
          className={clsx(
            "dark:text-[#A0A0A0]",
            "text-black-100",
            "text-[16px] font-light",

            // "leading-[24px]",
            // "max-w-[600px]",

            // "lg:max-w-[500px]",

            "text-justify"
          )}
        >
          {content}
        </p>
      </div>

      <Link href="/#contacto">
        <small className="text-black text-[12px] dark:text-white-100 hover:text-green">
          PROTEGE TU VEHICULO AHORA
        </small>
      </Link>
    </div>
  );
};
