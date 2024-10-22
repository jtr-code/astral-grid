import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

const modernWarfare = localFont({
  src: "./fonts/ModernWarfare.ttf",
  variable: "--font-modern-warfare",
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
        className={`${modernWarfare.variable} ${modernistRegular.variable} font-sans antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
