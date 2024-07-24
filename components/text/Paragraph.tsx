import React, {FC} from "react";
import { motion } from "framer-motion";

type TextProps = {
    text: string;
  };

export const Paragraph:FC<TextProps> = ({text}) => {
  return (
    <div>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center px-10 text-[16px] text-gray-800 dark:text-[#CAC6DD] leading-7"

      >
        {text}
      </motion.p>
    </div>
  );
};
