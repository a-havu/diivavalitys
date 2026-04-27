import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
        <header className="p-9 bg-[#CE0074] text-white">
            <div className="flex justify-center"><Image 
            src="/valk-logo.png"
            alt="diivavälitys logo"
            width={200}
            height={40}
            />
            </div>
            <nav className="flex flex-row justify-center align-baseline gap-6 mt-8">
                <Link href="">DIIVAT</Link>
                <Link href="">PALVELUT</Link>
                <Link href="">AJANKOHTAISTA</Link>
                <button className="bg-white text-black p-2">OTA YHTEYTTÄ</button>
            </nav>
        </header>
    );
}