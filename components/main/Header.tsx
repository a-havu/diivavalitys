import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
        <header className="p-9">
            <nav className="flex flex-row gap-6">
                <Image 
                src="/logoprimary.png"
                alt="diivavälitys logo"
                width={70}
                height={40}
                />
                <Link href="">linkki</Link>
                <Link href="">linkki</Link>
                <Link href="">linkki</Link>
                <Link href="">linkki</Link>
                <Link href="">linkki</Link>
            </nav>
        </header>
    );
}