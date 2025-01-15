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
  title: "Rudi Aj | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with decade years of experience specializing in Next.js and React. Based in Rijeka, Croatia",
  keywords:
    "Frontend Engineer, Next.js, React, Web Development, JavaScript, TypeScript, Croatia",
  openGraph: {
    title: "Rudi Aj | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in Next.js and React with 10 years of experience",
    locale: "en_US",
    type: "website",
    siteName: "Rudi Aj",
  },
  twitter: {
    card: "summary",
    title: "Rudi Aj | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specializing in Next.js and React",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${metropolis.variable} antialiased`}>{children}</body>
    </html>
  );
}
