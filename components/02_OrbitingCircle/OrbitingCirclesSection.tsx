import OrbitingCircles from "@/components/ui/orbiting-circles";
import clsx from "clsx";
import { ShieldSvg } from "../ui/ShieldSvg";
import { AutoEnreglaSvg } from "../ui/AutoEnreglaSvg";

export function OrbitingCirclesSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  xl:mb-32 ">
      <span
        className={clsx(
          // "pointer-events-none",
          // "whitespace-pre-wrap",
          "bg-gradient-to-b",
          "from-black to-gray-300",
          "bg-clip-text text-center",
          "text-4xl md:text-6xl",
          "xl:text-8xl font-semibold",
          "leading-none text-transparent",
          "dark:from-white",
          "dark:to-black"
        )}
      >
        "Auto en regla auto seguro"
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[80px] border-none bg-none"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.autoEnregla />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[30px] border-none bg-none"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.shield1 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-none"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.shield2 />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[60px] border-none bg-none"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.shiled3 />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  autoEnregla: () => <AutoEnreglaSvg />,
  shield1: () => <ShieldSvg fillColor="#25D366" height="100" width="100" />,
  shield2: () => <ShieldSvg fillColor="#25D366" height="100" width="100" />,
  shiled3: () => <ShieldSvg fillColor="#25D366" height="100" width="100" />,
};
