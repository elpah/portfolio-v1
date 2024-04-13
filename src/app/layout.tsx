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
      <head>
        <link
          rel="icon"
          href="/images/icon2.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="freelancehunt" content="260e3d318cb63a8" />
      </head>

      <body className={open_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
