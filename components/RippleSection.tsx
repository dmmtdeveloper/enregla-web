import Ripple from "@/components/magicui/ripple";
import { Auto } from "./nav/Auto";


export function RippleSection() {
  return (
    <div className="relative flex h-[800px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg">
      <Auto />
      <Ripple />
    </div>
  );
}
