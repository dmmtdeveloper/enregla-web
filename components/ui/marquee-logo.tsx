
import Marquee from "@/components/ui/marquee";
import { ClientsImage } from "./ClientsIcons";

export default function MarqueeDemoLogo() {
  return (
    <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        <ClientsImage />
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#EDF1F3] dark:from-black-100"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#EDF1F3] dark:from-black-100"></div>
    </div>
  );
}
