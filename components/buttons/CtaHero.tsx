import React, { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type ButttonProps = {
  title: string;
  background?: string;
  border?:string
  color?:string
  borderWidth?:string
};

export const ButtonCtaHero: FC<ButttonProps> = ({ title, background, border, color, borderWidth }) => {
  return (
    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <button
        style={{ backgroundColor: background, border:border, color:color, borderWidth: borderWidth }}
        className={clsx(
          "right-16",
          "rounded-[16px]",
          "border-opacity-40",
          "bg-opacity-80",
          "shadow-lg shadow-black/[0.1]",
          "backdrop-blur-[0.5rem]",
          "h-[3.25rem]",
          "w-[11rem] text-gray-50",
          "lg:block md:block",
          "text-[16px]",
          "font-semibold",
          "tracking-wide",
          "bg-gray-900",

          /*----hover----*/
          "transition",
          "hover:bg-gray-/20",
          "hover:shadow-md",
       

          /*----focus statate----*/
          "outline-none",
          "ring-green-300/70 ring-offset-2",
          "focus-visible:ring-2",
          "focus:scale-[0.98]",

          /*----disabled statate----*/
          "disabled:bg-blue-500/50",
          "disabled:cursor-not-allowed",
          "disabled:shadow",

          /*----dark mode----*/
          "dark:bg-[#AC6AFF]",
          "dark:hover:bg-purple-700"
        )}
      >
        {title}
      </button>
    </motion.div>
  );
};
