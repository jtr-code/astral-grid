import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const modernWarfare = localFont({
  src: "./fonts/ModernWarfare.ttf",
  variable: "--font-modern-warfare",
  weight: "600",
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
        className={`${modernWarfare.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
