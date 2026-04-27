import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer"

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Diivavälitys",
    template: "Diivavälitys | %s",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <header>
        <Header />
      </header>
      <footer>
        <Footer />
      </footer>
      {children}</body>
    </html>
  );
}
