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
      <div className={`flex-1 flex-row p-6 rounded-[20px]   transition duration-300 items-start`}>
        <div className={`w-[64px] h-[64px] rounded-full lg:flex justify-center items-center`}>
          <Icon className="icon w-[30px] h-[30px] object-contain text-[#00ED64]" />
        </div>
        <div className=" flex flex-col ml-3">
          <h4
            className={clsx(
              "font-semibold",
              "dark:text-white",
              "text-black-100",
              "text-[20px]",
              "leading-[23px]",
              "mb-1"
            )}
          >
            {title}
          </h4>
          <p className={clsx("dark:text-white-200", "text-black-100", "text-[16px]", "leading-[24px]", "mb-1")}>
            {content}
          </p>
        </div>
      </div>
    );
  };