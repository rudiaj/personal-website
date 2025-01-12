import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const metropolis = localFont({
  src: [
    {
      path: "../public/fonts/Metropolis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Metropolis-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Metropolis-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-metropolis", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${metropolis.variable}  antialiased`}>{children}</body>
    </html>
  );
}
