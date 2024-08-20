import clsx from "clsx";
import { SVGProps } from "react";

type BenefitsProps = {
  title: string;
  content: string;
  index: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const BenefitsCard: React.FC<BenefitsProps> = ({ icon: Icon, title, content, index }) => {
  return (
    <div className={`flex flex-col pt-6 gap-2 items-start`}>
      <Icon className="w-[30px] h-[30px] text-[#00ED64]" />
      <div className=" flex flex-col gap-3">
        <h4
          className={clsx(
            "font-semibold",
            "dark:text-white",
            "text-black-100",
            "text-[20px]",
            "leading-[23px]"
          )}
        >
          {title}
        </h4>
        <p
          className={clsx(
            "dark:text-white-200",
            "text-black-100",
            "text-[16px]",
            "leading-[24px]",
            "max-w-[600px]",

            "lg:max-w-[500px]",

            "text-justify"
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
