import type { Metadata } from "next";
import { Istok_Web, Lobster_Two, Italianno } from "next/font/google";
import Header from "@/components/header/header";
import { GlobalStyles } from "./global.style";

const istokWeb = Istok_Web({
  variable: "--font-istok-web",
  subsets: ["latin"],
  weight: "400",
});
const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
});

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
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
      <body
        className={`${istokWeb.variable} ${lobsterTwo.variable} ${italianno.variable}`}
      >
        <GlobalStyles />
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
