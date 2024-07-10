import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const unbounded = Unbounded({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={unbounded.className}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
