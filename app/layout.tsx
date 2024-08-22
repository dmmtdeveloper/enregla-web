import "./globals.css";
import Providers from "./providers";
import { Sora } from "next/font/google";
import { generateMetadata as generateMetadataCustom } from "@/meta/index";

export const generateMetadata = () => generateMetadataCustom();
const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body suppressHydrationWarning className={sora.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
