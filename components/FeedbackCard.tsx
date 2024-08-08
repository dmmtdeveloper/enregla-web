import React from "react";
import quotes from "@/public/assets/svg/quotes.svg";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
type cardProps = {
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
};

export const FeedbackCard: React.FC<cardProps> = ({ content, name, title, img }) => {
  return (
    <div
      className={clsx(
        /* default */
        "flex justify-between",
        "flex-col px-10 py-5",
        "rounded-[20px] max-w-[370px]",
        "md:mr-10 sm:mr-5 mr-0 my-5",
        "transition duration-300",
        
        /* dark-mode*/
        "dark:hover:bg-gray-900"
      )}
    >
      <Image
        className="w-[42px] h-auto object-contain"
        alt="quotes"
        src={quotes}
        width={50}
        height={50}
        priority={true}
      />

      <p
        className={clsx(
          "dark:text-slate-400",
          "text-black-100",
          "text-[18px]",
          "leading-[32px]",
          "xl:py-8 py-4",
          "xl:max-w-[600px] mb-10"
        )}
      >
        {content}
      </p>

      <div className="flex flex-row">
        <Image
          className="w-[48px] h-[48px] rounded-full border-2 border-slate-400"
          src={img}
          width={100}
          height={100}
          priority={true}
          alt="user"
        />

        <div className="flex flex-col ml-4">
          <h4 className="font-semibold text-[20px] leading-[32px] dark:text-white text-black-100">{name}</h4>
          <p className="text-sm leading-[24px] text-green  text-black-200">{title}</p>
        </div>
      </div>
    </div>
  );
};
