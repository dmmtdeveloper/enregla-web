"use client";
import React from "react";
import clsx from "clsx";
import { footerLinks, socialMedia } from "@/lib/footer";
import Link from "next/link";
import { Reveal } from "../animation/Reveal";

export const FooterSection = () => {
  return (
    <section
      className={clsx(
        "pt-10 pb-5",
        "flex justify-center items-center",
        "flex-col px-5",
        "xl:px-44",
        "border-t-1",
        "border-gray-950/[.1] bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] bg-gray-50/[.15]"
      )}
    >
      <div
        className={clsx(
          "flex items-start lg:items-start xl:items-start",
          "md:flex-row flex-col",
          "mb-8 w-full"
        )}
      >
        <div className="flex-1 flex flex-col gap-2">
          <small className={clsx("dark:text-white", "text-black-100", "text-[11px]")}>
            Síguenos en nuestras redes sociales
          </small>
          <Reveal>
            <div className="flex gap-4 flex-row md:mt-0">
              {socialMedia.map((social, index) => (
                <Link
                  href={social.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "w-10 h-auto",
                    "dark:text-white",
                    "text-black-100",
                    "dark:hover:text-green",
                    "hover:text-green",

                    /*hover efect*/
                    "hover:scale-[1.15]",
                    "active:scale-105",
                    "transition",
                    "duration-300"
                  )}
                >
                  <social.icon size={28} />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <div
          className={clsx("flex-[2]", "w-full flex xl:flex-row", "justify-between", "flex-wrap")}
        >
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col my-4 min-w-[150px]">
              <Reveal>
                <h4 className="dark:text-white text-black text-small font-semibold leading-[27px]">
                  {footerLink.title}
                </h4>
              </Reveal>
              <Reveal>
                <ul>
                  {footerLink.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className={clsx(
                        "my-2 text-small",
                        "dark:text-white-100",
                        "text-black-200",
                        "leading-[24px]",
                        "cursor-pointer",
                        "hover:text-green",
                        "dark:hover:text-green"
                      )}
                    >
                      {link.link ? (
                        <Link href={link.link}>{link.name}</Link>
                      ) : (
                        <span>{link.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="w-full md:flex-col flex justify-between items-center  flex-col  border-t-[1px] dark:border-t-gray-800 border-t-black-200">
          <small className="dark:text-white-200 text-black-200 text-xs text-center mt-4">
            Enregla © 2024. Todos los derechos reservados.
          </small>
          {/* <p className="text-xs text-center dark:text-white-200 text-black-200 ">
            <span>About this website:</span> built with React & Next.js, TypeScript, Tailwind CSS,
            Framer Motion, Web3Forms.
          </p> */}
        </div>
      </Reveal>
    </section>
  );
};
