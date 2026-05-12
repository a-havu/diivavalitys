'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false)
    return(
	<header className="bg-[#CE0074] text-white">
            <div className="flex justify-between md:justify-center p-4">
            <Link href="/">
            <Image 
            src="/valk-logo.png"
            alt="diivavälitys logo"
            width={200}
            height={200}
            loading="eager"
            className="w-20 md:w-48"
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
                <Link href="/diivat" className="p-2 text-lg font-bold">DIIVAT</Link>
                <Link href="/palvelut" className="p-2 text-lg font-bold">PALVELUT</Link>
                <Link href="/ajankohtaista" className="p-2 text-lg font-bold">AJANKOHTAISTA</Link>
                <Link href="/otayhteytta" className="bg-white text-black text-center text-lg font-bold p-2 w-42 rounded-xl hover:cursor-pointer">
                    OTA YHTEYTTÄ
                </Link>
            </nav>
            {open && (
                <nav className="md:hidden flex flex-col items-center gap-4 pb-6">
                <Link href="/diivat" className="p-2 text-lg font-bold" onClick={() => setOpen(false)}>DIIVAT</Link>
                <Link href="/palvelut" className="p-2 text-lg font-bold" onClick={() => setOpen(false)}>PALVELUT</Link>
                <Link href="/ajankohtaista" className="p-2 text-lg font-bold" onClick={() => setOpen(false)}>AJANKOHTAISTA</Link>
                <Link href="/otayhteytta" className="bg-white text-black text-center text-lg font-bold p-2 w-42 rounded-xl" onClick={() => setOpen(false)}>
                    OTA YHTEYTTÄ
                </Link>
                </nav>
            )}
        </header>
    );
}