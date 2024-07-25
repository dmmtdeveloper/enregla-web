import React from 'react'
import Link from "next/link";

import { links } from "@/lib/data";
import {motion} from "framer-motion"
import { useHandleNav } from "@/hooks/useHandleNav";
import clsx from 'clsx';

export const Links = () => {
  const {handleNav} = useHandleNav();

  return (
    <>
      <ul className="hidden md:flex items-center justify-center gap-4 bg-slate-200 dark:bg-[#43435C] py-2 px-10 rounded-full dark:text-white">
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
  )
}
