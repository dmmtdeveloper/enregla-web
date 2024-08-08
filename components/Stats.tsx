import { stats } from "@/lib/stats";
import clsx from "clsx";
import React from "react";
import NumberTickerComponent from "./ui/NumberTicketComponent";

const Stats = () => {
  return (
    <section className="flex-row flex-wrap animation-scroll dark:bg-black-100 items-center justify-center flex">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-2 flex justify-center items-center flex-row m-3 px-4 transform transition duration-300 hover:scale-[1.15] active:scale-105`}
        >
          <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
            <NumberTickerComponent value={stat.value} />
          </p>

          <p
            className={clsx(
              "xl:text-[25px]",
              "leading-[26px]",
              "text-[16px]",
              "font-normal",
              // "text-black-100",
              "text-[#25D366] uppercase ml-3"

              // "xl:text-[30px]",
              // "max-w-[700px]",

              /*dark mode */
              // "dark:text-white"
            )}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
