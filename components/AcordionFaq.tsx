import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export const AcordionFaq = () => {
  const [open, setOpen] = useState(false);

  const handleFaq = () => {
    setOpen(!open);
  };

  return (
    <section className="w-full shadow-xl bg-white border border-black-100">
      <div className="flex justify-between items-center h-24 w-full px-4 2xl:px-16">
        <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div onClick={handleFaq} className="cursor-pointer">
          {open ? (
            <GoChevronUp className="h-[30px] w-[30px] text-black-100" />
          ) : (
            <GoChevronDown className="h-[30px] w-[30px] text-black-100" />
          )}
        </div>
      </div>
      {open && (
        <div className="w-full p-10 bg-slate-400 ease-in duration-500">
          <p className="text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, maxime!</p>
        </div>
      )}
    </section>
  );
};
