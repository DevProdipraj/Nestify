import type { Metadata } from "next";
import "./globals.css";
import NavbarTop from "@/component/home/NavbarTop";
import Navbar from "@/component/home/Navbar";
import Footer from "@/component/home/Footer";

 
export const metadata: Metadata = {
  title: "Nestify",
  description: "Online Furniture Shop",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         
      >
        <NavbarTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
