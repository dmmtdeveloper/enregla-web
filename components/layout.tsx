import clsx from "clsx";
import { Navbar } from "./Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <div
          className={clsx(
            "bg-[#7ADB78]",
            " absolute top-[-6rem]",
            "-z-10 right-[11rem]",
            "h-[31.25rem] w-[31.25rem]",
            "rounded-full blur-[10rem] sm:w-[68.75rem]"
          )}
        ></div>

        <div
          className={clsx(
            "bg-[#dbd7fb]",
            "absolute top-[-1rem] -z-10",
            "left-[-35rem] h-[31.25rem] w-[50rem]",
            "rounded-full blur-[10rem] sm:w-[68.75rem]",
            "md:left-[-33rem] lg-left-[-28rem] xl-left-[-15rem] 2xl:left-[]"
          )}
        ></div>
        <Navbar />
        <main className="pt-[31.25rem]">{children}</main>
      </main>
    </>
  );
}
