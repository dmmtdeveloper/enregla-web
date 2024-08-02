import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/lib/gridItems";

const Grid = () => {
  return (
    <section className="px-4 mb-36" id="about">
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem 
          id={id} 
          key={id} 
          title={title} 
          description={description}
          className={className}
          img={img}
          imgClassName={imgClassName}
          titleClassName={titleClassName}
          spareImage={spareImg} 
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
