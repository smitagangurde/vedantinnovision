import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Careers | Vedant Innovision",
  description:
    "Join Vendant Innovision and work with a creative branding and marketing team.",
  keywords: [
    "Vendant careers",
    "branding agency jobs",
    "creative jobs Pune",
    "marketing agency careers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        <Header />

        <main className="">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
