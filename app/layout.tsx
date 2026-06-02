import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer"
import { Karla, Geist } from 'next/font/google'
import '@fontsource/cal-sans'
import { cn } from "@/lib/utils";
import ClickSpark from "@/components/ClickSpark";

const geist = Geist({
	subsets:['latin'],
	variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${karla.variable} h-full antialiased`}>
        <ClickSpark
      sparkColor="#ffffff"
      sparkSize={7}
      sparkRadius={18}
      sparkCount={8}
      duration={600}
      easing="ease-out"
      extraScale={1.5}
    >
  <header>
    <Header />
  </header>
  <main className="flex-1">
    {children}
  </main>
  <footer>
    <Footer />
  </footer>
  </ClickSpark>
</body>
    </html>
  );
}
