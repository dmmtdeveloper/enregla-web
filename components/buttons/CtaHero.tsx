import React, { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type ButttonProps = {
  title: string;
};

export const ButtonCtaHero: FC<ButttonProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <button
        className={clsx(
          "right-16",
          "rounded-[12px]",
          "border-opacity-40",
          "bg-[#52c050] bg-opacity-80",
          "shadow-lg shadow-black/[0.1]",
          "backdrop-blur-[0.5rem]",
          "h-[3.25rem]",
          "w-[11rem] text-gray-100",
          "lg:block md:block",
          "text-[12px]",
          "font-semibold",

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
          "dark:bg-[#AC6AFF]"
        )}
      >
        {title}
      </button>
    </motion.div>
  );
};
