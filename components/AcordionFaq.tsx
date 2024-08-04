import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export const AcordionFaq = () => {
  const [open, setOpen] = useState(false);

  const handleFaq = () => {
    setOpen(!open);
  };

  return (
    <section className="w-1/2 mx-auto shadow-xl bg-white border rounded-2xl">
      <div className="flex justify-between items-center h-16 px-4 2xl:px-16">
        <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div onClick={handleFaq} className="cursor-pointer">
          {open ? (
            <GoChevronUp className="h-[30px] w-[30px] text-black-100" />
          ) : (
            <GoChevronDown className="h-[30px] w-[30px] text-black-100" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <div className="p-10 bg-slate-400">
          <p className="text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, maxime!
          </p>
        </div>
      </div>
    </section>
  );
};
