import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
	<header className="bg-[#CE0074] text-white">
            <div className="flex justify-center p-4">
            <Link href="/">
            <Image 
            src="/valk-logo.png"
            alt="diivavälitys logo"
            width={200}
            height={40}
            loading="eager"
            />
            </Link>
            </div>
            <nav className="flex flex-row justify-center align-baseline gap-6 p-6">
                <Link href="/diivat" className="p-2 text-lg font-bold">DIIVAT</Link>
                <Link href="/palvelut" className="p-2 text-lg font-bold">PALVELUT</Link>
                <Link href="/ajankohtaista" className="p-2 text-lg font-bold">AJANKOHTAISTA</Link>
                <Link href="/otayhteytta" className="bg-white text-black text-center text-lg font-bold p-2 w-42 rounded-xl hover:cursor-pointer">
                    OTA YHTEYTTÄ
                </Link>
            </nav>
        </header>
    );
}