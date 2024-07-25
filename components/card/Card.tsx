import React, { FC } from "react";
import { GoChevronRight } from "react-icons/go";
import { IoCheckbox } from "react-icons/io5";

type CardProps = {
  title: string;
  paragraph: string;
  color: string;
};

export const Card: FC<CardProps> = ({ title, paragraph, color }) => {
  return (
    <article className="flex flex-col p-10 mt-4 rounded-[30px] dark:bg-[#16131A] bg-gray-50 justify-between h-[340px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] text-gray-900  dark:text-gray-50">{title}</h2>
        <p className="text-[#A4A0B9] text-justify">{paragraph}</p>
      </div>

      <div className="flex items-center justify-between">
       

        <IoCheckbox style={{fill : color}} className="text-5xl rounded-[30px]"/>
       
          {/* <IconAuto color={color}/> */}
        
        <div className="flex items-center gap-3">
          <p className="dark:text-gray-50 text-gray-900 text-[12px]  tracking-wider font-semibold">EXPLORA MAS</p>
          <GoChevronRight className="text-3xl dark:text-gray-50 text-gray-900 " />
        </div>
      </div>
    </article>
  );
};
