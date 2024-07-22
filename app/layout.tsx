import type { Metadata } from "next";
import { Inter, Manrope, Open_Sans } from "next/font/google";
import "./globals.scss";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/HeroBanner/Hero";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const opensans = Open_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Bold",
  description: "I'm learning next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${opensans.className} ${manrope.className}`}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
