import clsx from "clsx";
import { SVGProps } from "react";

type OurServiceProps = {
    title: string;
    content: string;
    index: number;
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  };
  
  export const OurServicesCard: React.FC<OurServiceProps> = ({ icon: icon, title, content, index }) => {
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
              "mb-1 text-justify",
              "xl:max-w-[600px]"
            )}
          >
            {content}
          </p>
        </div>
      </div>
    );
  };