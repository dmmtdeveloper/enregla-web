import clsx from "clsx";
import { SVGProps } from "react";

type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const MaximumCard: React.FC<BenefitsProps> = ({ icon: Icon, title, content, index }) => {
  return (
    <div>
    <div className="flex w-full flex-col gap-3 md:gap-2">
      <div className="flex-col items-center gap-4 2xl:flex-col 2xl:items-start 2xl:gap-2 lg:flex-col">
        <Icon className="w-[30px] object-contain h-[30px] text-gray-500" />
        <h4
          className={clsx(
            "font-styling font-display leading-[32px] md:leading-none text-xl 2xl:leading-[130%] dark:text-slate-200 text-black-100"
          )}
        >
          {title}
        </h4>
      </div>
      <p className={clsx("text-sm leading-[1.6] dark:text-slate-300 font-normal text-black-200")}>
        {content}
      </p>
    </div>
  </div>
  );
};
