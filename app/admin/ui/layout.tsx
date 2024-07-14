import Navigation from "./navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen h-screen flex bg-gradient-to-br from-[#EDF1F3] to-[#7ADB78] text-[#222] overflow-hidden">
      <Navigation />
      <section className="px-[2rem] py-[1rem]">{children}</section>
    </main>
  );
}
