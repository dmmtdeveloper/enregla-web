"use client";
import React from "react";
import Link from "next/link";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavItems } from "@/lib/types";

type menuProps = {
  onClick: () => void;
};

export const LinksMenu: React.FC<menuProps> = ({ onClick }) => {
  const path = usePathname();

  const renderLinks = () => {
    if (path === "/") return links.home as NavItems["home"];
    else if (path === "/products") return links.products as NavItems["products"];
  };

  const renderedLinks = renderLinks();

  return (
    <>
      <ul className="flex flex-col items-center gap-5 mt-10 dark:text-white text-2xl font-semibold mb-16">
        {renderedLinks &&
          renderedLinks.map((link) => (
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
                onClick={onClick}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
      </ul>
    </>
  );
};
