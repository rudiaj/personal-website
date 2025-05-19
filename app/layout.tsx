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

  // Changed from www.rudiaj.dev to rudiaj.dev to match Vercel's redirect behavior
  metadataBase: new URL("https://rudiaj.dev"),

  alternates: {
    canonical: "/",
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
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },

  // Moved from manual meta tags
  formatDetection: {
    telephone: false,
    email: false,
  },

  // Enhanced icons configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },

  // Added from manual meta tags
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rudi Aj | Senior Frontend Engineer",
  },

  // Added for better SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Added for verification
  verification: {
    google: "fW1S8AqlU1ozu03LIQZq-WRcNhJspJQe_iPMX4Phkv4", // Your existing Google verification code
  },

  // Added for better SEO
  applicationName: "Rudi Aj | Personal Website",
  referrer: "origin-when-cross-origin",
  category: "portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden" suppressHydrationWarning>
      <body className={`${metropolis.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
