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
    <div className={`flex flex-col  p-6 rounded-[20px] gap-2  transition duration-300 items-start`}>
      {/* <div className={`w-[64px] h-[64px] rounded-full lg:flex justify-center items-center`}> */}
      <Icon className="w-[30px] object-contain h-[30px] text-[#00ED64]" />
      {/* </div> */}
      <div className=" flex flex-col gap-3">
        <h4 className={clsx("font-semibold", "dark:text-white", "text-black-100", "text-[20px]", "leading-[23px]")}>
          {title}
        </h4>
        <p
          className={clsx(
            "dark:text-white-200",
            "text-black-100",
            "text-[16px]",
            "leading-[24px]",
            "max-w-[600px]",
            "text-justify"
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
