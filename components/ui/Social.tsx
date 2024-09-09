import { socialMedia } from "@/lib/footer";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const Social = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      {socialMedia.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <Link href={social.link} key={index} target="_blank" rel="noopener noreferrer">
            <IconComponent
              className={clsx(
                "text-4xl",
                "text-gray-900",
                "hover:text-green-400 transition-all cursor-pointer",
                "dark:text-white",
                "dark:hover:text-green-400"
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};
