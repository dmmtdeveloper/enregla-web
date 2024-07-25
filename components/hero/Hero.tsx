import React from "react";
import Image from "next/image";
import heroimage from "@/public/assets/img/HeroImage.jpg";

export const Hero = () => {
  return (
    <div>
      <div>
        <Image className="h-60 w-16" src={heroimage} alt="heroimage" fill={true} />
      </div>
    </div>
  );
};
