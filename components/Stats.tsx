import { stats } from "@/lib/stats";
import styles from "@/lib/style";
import clsx from "clsx";
import React from "react";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap animation-scroll dark:bg-black-100 bg-white pb-20`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3 px-4 transform transition duration-300 hover:scale-[1.15] active:scale-105`}>
          <h4
            className={clsx(
              "font-semibold xs:text-[40px] text-[30px]",
              "xs:leading-[53px]",
              "leading-[43px]",
              "text-black-100",

              /*dark mode */
              "dark:text-white"
            )}
          >
            {stat.value}
          </h4>
          <p
            className={clsx(
              "xs:text-[20px]",
              "xs:leading-[26px]",
              "text-[16px]",
              "font-normal",
              "leading-[25px]",
              "text-black-100",
              "text-gradient uppercase ml-3",

              "xl:text-[30px]",

              /*dark mode */
              "dark:text-white"
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
