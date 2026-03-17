import type { Metadata } from "next";
import { Inter, Italianno } from "next/font/google";
import { GlobalStyles } from "./global.style";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});
const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Talk to Bonaventure",
  description:
    "Osakwe Bonaventure's brand website where you can learn more about him and his work.",
  keywords: [
    "Bonaventure Osakwe",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "Projects",
    "Contact",
    "Bonaventure Osakwe Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  ${italianno.variable}`}>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
