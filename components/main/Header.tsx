import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
        <header className="bg-[#CE0074] text-white">
            <div className="flex justify-center">
            <Link href="/">
            <Image 
            src="/valk-logo.png"
            alt="diivavälitys logo"
            width={200}
            height={40}
            />
            </Link>
            </div>
            <nav className="flex flex-row justify-center align-baseline gap-6 p-6">
                <Link href="/diivat" className="p-2">DIIVAT</Link>
                <Link href="/palvelut" className="p-2">PALVELUT</Link>
                <Link href="/ajankohtaista" className="p-2">AJANKOHTAISTA</Link>
                <Link href="/otayhteytta">
                <button className="bg-white text-black p-2 rounded-xl hover:cursor-pointer">
                    OTA YHTEYTTÄ</button>
                </Link>
            </nav>
        </header>
    );
}