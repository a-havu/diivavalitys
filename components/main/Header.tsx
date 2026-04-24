import Link from "next/link";

export default function Header() {
    return(
        <header className="flex flex-row p-6">
            <nav className="flex flex-row gap-6">
                <Link href="">DIIIVAT</Link>
                <Link href="">DIIIVAT</Link>
                <Link href="">DIIIVAT</Link>
                <Link href="">DIIIVAT</Link>
                <Link href="">DIIIVAT</Link>
            </nav>
        </header>
    );
}