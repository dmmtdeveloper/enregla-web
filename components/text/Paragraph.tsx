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
        className="text-center text-[16px] text-gray-800 dark:text-[#CAC6DD]"

      >
        {text}
      </motion.p>
    </div>
  );
};
