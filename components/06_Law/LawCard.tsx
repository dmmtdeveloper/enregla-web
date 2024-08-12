import clsx from "clsx";
import { SVGProps } from "react";

type LawProps = {
    title: string;
    content: string;
    index: number;
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  };
  
  export const LawCard: React.FC<LawProps> = ({ icon: Icon, title, content, index }) => {
    return (
      <div className="xl:px-24">
        <div className={`flex flex-row p-6 gap-6 items-start`}>
          <Icon className="icon w-[30px] h-[30px] object-contain text-green" />
  
          <div className="flex-1 flex flex-col ml-3 gap-1">
            <h4
              className={clsx(
                "font-semibold",
                "dark:text-white",
                "text-black-100",
                "text-[24px]",
                "leading-[23px]",
                "mb-1"
              )}
            >
              {title}
            </h4>
            <p className={clsx("dark:text-slate-400", "text-black-100", "text-[16px]", "leading-[24px]", "mb-1")}>
              {content}
            </p>
          </div>
        </div>
      </div>
    );
  };