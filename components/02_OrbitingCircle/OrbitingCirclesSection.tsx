import OrbitingCircles from "@/components/ui/orbiting-circles";
import clsx from "clsx";
import { AutoEnreglaSvg } from "../ui/AutoEnreglaSvg";

export function OrbitingCirclesSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  xl:mb-32 ">
      <span
        className={clsx(
          "dark:text-slate-100",
          "text-slate-700",
          "text-center",
          "text-4xl md:text-6xl",
          "xl:text-7xl font-semibold",
          "leading-none"
        )}
      >
        "Auto en regla auto seguro"
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="w-[70px] h-auto border-none bg-none"
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
        {/* <Icons.shield1 /> */}
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-none"
        duration={20}
        delay={10}
        radius={80}
      >
        {/* <Icons.shield2 /> */}
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[60px] border-none bg-none"
        radius={190}
        duration={20}
        reverse
      >
        {/* <Icons.shiled3 /> */}
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  // shield1: () => <ShieldSvg fillColor="none" height="100" width="100" />,
  // shield2: () => <ShieldSvg fillColor="none" height="100" width="100" />,
  // shiled3: () => <ShieldSvg fillColor="none" height="100" width="100" />,
  autoEnregla: () => <AutoEnreglaSvg />,
};
