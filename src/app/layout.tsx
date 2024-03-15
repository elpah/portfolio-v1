import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El-Pachris Obeng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/images/icon2.png"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body className={open_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
