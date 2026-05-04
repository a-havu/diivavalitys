import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer"
import { Karla } from 'next/font/google'
import '@fontsource/cal-sans'

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
})

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
    <html lang="en">
      <body className={`${karla.variable} h-full antialiased`}>
  <header>
    <Header />
  </header>
  <main className="flex-1">
    {children}
  </main>
  <footer>
    <Footer />
  </footer>
</body>
    </html>
  );
}
