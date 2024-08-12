import React, {FC} from "react";
import { motion } from "framer-motion";

type TextProps = {
    text: string;
  };

export const Paragraph:FC<TextProps> = ({text}) => {
  return (
    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center md:tracking-wider  text-sm md:text-lg lg:text-2xl dark:text-blue-100 text-black-100 mb-20"

      >
        {text}
      </motion.p>
    </div>
  );
};
