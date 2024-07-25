import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Indiana Merchandise",
  description: " Where Exquisite Craftsmanship Meets Unparalleled Quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet"/>

      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
