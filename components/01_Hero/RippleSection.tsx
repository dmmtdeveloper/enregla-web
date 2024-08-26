import React from "react";
import Ripple from "../ui/ripple";
import { Auto } from "../ui/Auto";

export const RippleSection = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center  rounded-lg ">
      <Auto width="60px" height="80px" />
      <Ripple />
    </div>
  );
};
