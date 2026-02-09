import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Board Game Info Tent Card | Darrick Develops",
  description: "This app generates a table tent card with quick board game info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kelpui@1/css/kelp.css" />
        <script type="module" src="https://cdn.jsdelivr.net/npm/kelpui@1/js/kelp.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
