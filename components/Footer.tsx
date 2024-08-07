import React from "react";
import clsx from "clsx";
import { footerLinks, socialMedia } from "@/lib/footer";
import { Logoenregla } from "./nav/Logoenregla";
import Link from "next/link";

export const Footer = () => {
  return (
    <section
      className={clsx(
        "pt-10 pb-5",
        "flex justify-center items-center",
        "flex-col px-4",
        "xl:px-44",
        "border",
        "border-gray-950/[.1] bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] bg-gray-50/[.15]"
      )}
    >
      <div className={clsx("flex items-center xl:items-start", "md:flex-row flex-col", "mb-8 w-full")}>
        <div className="flex-1 flex-col justify-center items-center xl:justify-start mr-10 ">
          <Logoenregla />
        </div>

        <div className={clsx("flex-[2]", "w-full flex xl:flex-row", "justify-between", "flex-wrap")}>
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col my-4 min-w-[150px]">
              <h4 className="dark:text-white text-black text-[18px] font-semibold leading-[27px]">
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="my-2 text-[16px] dark:text-white-100 text-black-200 leading-[24px] cursor-pointer hover:text-green dark:hover:text-green"
                  >
                    {link.link ? <Link href={link.link}>{link.name}</Link> : <span>{link.name}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:flex-col flex justify-between items-center  flex-col pt-6 border-t-[1px] dark:border-t-white-100 border-t-black-200">
        <div className="flex gap-10 flex-row md:mt-0">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[21px] h-[21px] dark:text-white text-black-100 dark:hover:text-green hover:text-green"
            >
              <social.icon size={30} />
            </a>
          ))}
        </div>
        <small className="dark:text-white-200 text-black-200 text-xs text-center mt-6">
          © Copyright 2024 - enregla - Todos los derechos reservados.
        </small>
        <p className="text-xs text-center text-black-200">
          <span>About this website:</span> built with React & Next.js(App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend.
        </p>
      </div>
    </section>
  );
};
