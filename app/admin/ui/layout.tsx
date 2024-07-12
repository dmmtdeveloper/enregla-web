import Navigation from "./navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen h-screen flex bg-[#0E0C15] overflow-hidden">
      <Navigation />
      <section className="px-[2rem] py-[1rem]">{children}</section>
    </main>
  );
}
