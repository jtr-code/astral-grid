import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import Navbar from "@/components/Navbar";

const antonRegular = localFont({
  src: "./fonts/AntonRegular.ttf",
  variable: "--font-anton-regular",
  weight: "600",
});
const modernistRegular = localFont({
  src: "./fonts/Sk-Modernist-Regular.otf",
  variable: "--font-modernist-regular",
});

export const metadata: Metadata = {
  title: "Astral Grid",
  description: "Astral Grid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonRegular.variable} ${modernistRegular.variable} font-sans antialiased`}
      >
        <LayoutWrapper>
          <Navbar />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
