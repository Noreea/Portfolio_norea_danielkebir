import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//import { GeistSans } from "geist/font/sans";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Noréa Dani El Kebir • Portfolio",
  description: "Developer web fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased "font-sans h-full bg-background text-foreground"`}
      >
        {children}
      </body>
    </html>
  );
}
