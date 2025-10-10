import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SnapEvent — Find Photographers For Every Moment",
  description:
    "Discover and book photographers. Browse portfolios, compare prices, and book with confidence.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "SnapEvent — Find Photographers",
    description:
      "Discover and book photographers. Browse portfolios, compare prices, and book with confidence.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SnapEvent",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


