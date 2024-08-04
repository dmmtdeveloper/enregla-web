import React from "react";
import clsx from "clsx";
import { footerLinks, socialMedia } from "@/lib/footer";
import { Logoenregla } from "./nav/Logoenregla";

export const Footer = () => {
  return (
    <section
      className={clsx("py-8 md:py-6", "flex justify-center items-center", "flex-col px-4", "mt-64", "xl:px-32 xl:py-10 dark:bg-[#001E2B] bg-[#E3FCF7]")}
    >
      <div className={clsx("flex  items-start", "md:flex-row flex-col", "mb-8 w-full")}>
        <div className="flex-1 flex-col justify-start mr-10 ">
          <Logoenregla />
        </div>

        <div className={clsx("flex-[1.5]", "w-full  flex flex-row", "justify-between", "flex-wrap", "md:mt-0", "mt-10")}>
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col my-4 min-w-[150px]">
              <h4 className="text-black-100 dark:text-white-100 text-[18px] font-semibold leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="">
                {footerLink.links.map((link, name) => (
                  <li
                    key={name}
                    className="my-2 text-[16px] dark:text-white-200 text-black-200 leading-[24px] cursor-pointer hover:text-green dark:hover:text-green"
                  >
                    <a href={link.name} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white-200">
        <small className="dark:text-white-200 text-black-200 text-center">
          © Copyright 2024 - enregla - Todos los derechos reservados.
        </small>

        <div className="flex gap-10 flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[21px] h-[21px] dark:text-white text-black-100 hover:text-green"
            >
              <social.icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
