'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from 'next/navigation'

export default function Header() {
    const [open, setOpen] = useState(false)
  	const pathname = usePathname()
  	const linkClass = (href) =>
    `p-2 text-lg font-bold ${pathname === href ? 'text-black bg-white/80 rounded-lg p-2' : ''}`

    return(
	<header className="bg-[#CE0074] text-white">
            <div className="card-image flex justify-between md:justify-center p-4 cursor-pointer">
            <Link href="/">
            <Image 
            src="/valk-logo.png"
            alt="diivavälitys logo"
            width={200}
            height={200}
            className="w-20 md:w-48 h-auto"
            loading="eager"
            />
            </Link>

            <button
                className="md:hidden p-2"
                onClick={() => setOpen(!open)}
            >
            {open ? (
                <span className="text-2xl">✕</span>
            ) : (
                <span className="text-2xl">☰</span>
            )}
            </button>

            </div>
            <nav className="hidden md:flex flex-row justify-center align-baseline gap-6 p-6">
			<Link href="/diivat" className={linkClass('/diivat')}>DIIVAT</Link>
			<Link href="/palvelut" className={linkClass('/palvelut')}>PALVELUT</Link>
			<Link href="/ajankohtaista" className={linkClass('/ajankohtaista')}>AJANKOHTAISTA</Link>
			<Link href="/otayhteytta" className={linkClass('/otayhteytta')}>OTA YHTEYTTÄ</Link>
			</nav>
            {open && (
                <nav className="md:hidden flex flex-col items-center gap-4 pb-6">
                <Link href="/diivat" className="p-2 text-lg font-bold" onClick={() => setOpen(false)}>DIIVAT</Link>
                <Link href="/palvelut" className="p-2 text-lg font-bold" onClick={() => setOpen(false)}>PALVELUT</Link>
                <Link href="/ajankohtaista" className="p-2 text-lg font-bold" onClick={() => setOpen(false)}>AJANKOHTAISTA</Link>
                <Link href="/otayhteytta" className="p-2 text-lg font-bold" onClick={() => setOpen(false)}>
                    OTA YHTEYTTÄ
                </Link>
                </nav>
            )}
        </header>
    );
}