import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./_styles/globals.css";

import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

const unbounded = Unbounded({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Obraz",
  description: "Obraz is a theatre school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${unbounded.className} bg-black min-h-screen`}>
        <Header />

        <main className="min-h-screen mx-auto">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
