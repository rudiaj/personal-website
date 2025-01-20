import type { Metadata, Viewport } from "next";
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
  variable: "--font-metropolis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudi Aj | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 10 years of experience specializing in Next.js and React. Based in Rijeka, Croatia",
  keywords:
    "Frontend Engineer, Next.js, React, Web Development, JavaScript, TypeScript, Croatia",
  authors: [{ name: "Rudi Aj" }],
  creator: "Rudi Aj",
  metadataBase: new URL("https://www.rudiaj.dev"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rudi Aj | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in Next.js and React with 10 years of experience",
    locale: "en_US",
    type: "website",
    siteName: "Rudi Aj",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rudi Aj - Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    title: "Rudi Aj | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specializing in Next.js and React",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no, email=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="mobile-web-app-capable-status-bar-style"
          content="default"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable-title" content="MyWebSite" />
      </head>
      <body className={`${metropolis.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
