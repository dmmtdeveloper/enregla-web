import clsx from "clsx";
import { SVGProps } from "react";

type OurServiceProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const OurServicesCard: React.FC<OurServiceProps> = ({ icon: icon, title, content }) => {
  return (
    <div >
      <div className="flex w-full flex-col gap-3 md:gap-2">
        <h4
          className={clsx(
           "font-styling font-display leading-[32px] md:leading-none text-xl 2xl:leading-[130%] dark:text-slate-200 text-black-100"
          )}
        >
          {title}
        </h4>
        <p
          className={clsx(
           "text-sm leading-[1.6] dark:text-slate-300 font-normal text-black-200"
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
