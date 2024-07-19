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
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <body className={`${opensans.className} ${manrope.className}`}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
