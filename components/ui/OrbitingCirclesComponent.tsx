import OrbitingCircles from "@/components/ui/orbiting-circles";
import { FaGithub } from "react-icons/fa6";
import { RiPoliceBadgeFill } from "react-icons/ri";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  xl:mb-32">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        "Auto en regla auto seguro"
      </span>

      {/* Inner Circles */}
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={20} radius={80}>
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={10} radius={80}>
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={190} duration={20} reverse>
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={190} duration={20} delay={20} reverse>
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
  <FaGithub className="w-28 h-auto"/>
  ),
  notion: () => (
    <RiPoliceBadgeFill/>
  ),
  openai: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        className="text-black-100 dark:text-white"
        fill="currentColor"
        d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm3.433 4.561a1 1 0 0 1 1.497 1.32l-.083.094l-5.234 5.235a1.1 1.1 0 0 1-1.46.085l-.096-.085l-2.404-2.404a1 1 0 0 1 1.32-1.498l.094.083l1.768 1.768z"
      />
    </g>
  </svg>
  ),
  googleDrive: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        className="text-black-100"
        fill="currentColor"
        d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm3.433 4.561a1 1 0 0 1 1.497 1.32l-.083.094l-5.234 5.235a1.1 1.1 0 0 1-1.46.085l-.096-.085l-2.404-2.404a1 1 0 0 1 1.32-1.498l.094.083l1.768 1.768z"
      />
    </g>
  </svg>
  ),
  whatsapp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        className="text-black-100"
        fill="currentColor"
        d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm3.433 4.561a1 1 0 0 1 1.497 1.32l-.083.094l-5.234 5.235a1.1 1.1 0 0 1-1.46.085l-.096-.085l-2.404-2.404a1 1 0 0 1 1.32-1.498l.094.083l1.768 1.768z"
      />
    </g>
  </svg>
  ),
};
