import Navigation from "./navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen h-screen flex bg-gradient-to-br from-slate-900 to-teal-700 text-[#222] overflow-hidden">
      <Navigation />
      <section className="w-[calc(100%_-_60px)] h-full px-[2rem] py-[1rem] flex flex-col justify-between">
        {children}
      </section>
    </main>
  );
}
