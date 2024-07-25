import React from "react";
import Link from "next/link";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { useHandleNav } from "@/hooks/useHandleNav";
import clsx from "clsx";

export const LinksMenu = () => {
  const { handleNav } = useHandleNav();
  return (
    <>
      <ul className="flex flex-col items-center gap-5 mt-10 dark:text-white text-2xl font-semibold">
        {links.map((link) => (
          <motion.li
            className="h-3/4 flex items-center justify-center"
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className={clsx(
                "flex w-full",
                "items-center justify-center",
                "px-3 py-3",
                "hover:text-green-400",
                "transition"
              )}
              href={link.hash}
              onClick={handleNav}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </>
  );
};
