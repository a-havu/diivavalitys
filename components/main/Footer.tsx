import Image from "next/image";
import Link from "next/link"

export default function Footer() {
    return(
        <footer className="bg-[#CE0074] p-5 text-xs flex flex-col items-center">
            <div className="text-white text-center">
            <Image
            src="/valk-logo.png"
            alt="logo"
            width={150}
            height={150}
            className="h-auto"
            />
            <p className="mt-6">info@diivavalitys.fi</p>
            <p>+358 45 7831 0826</p>
            <p className="mt-4">Diivakonserni Oy</p>
            <p className="mb-5">Y-tunnus: 3513385-8</p>
            <Link href="/tietosuojaseloste">Tietosuojaseloste</Link>
            </div>
            <div className="flex flex-row p-4 gap-3">
                <Link href="https://www.facebook.com/profile.php?id=61571537223438">
                <Image
                src="/fb.png"
                alt="facebook-logo"
                width={25}
                height={25}
                className="h-auto"
                />
                </Link>
                <Link href="https://www.instagram.com/diivavalitys">
                <Image
                src="/insta.png"
                alt="instagram-logo"
                width={25}
                height={25}
                className="h-auto"
                />
                </Link>
                <Link href="https://www.tiktok.com/@diivavalitys">
                <Image
                src="/tiktok.png"
                alt="tiktok-logo"
                width={25}
                height={25}
                className="h-auto"
                />
                </Link>
            </div>
        </footer>
    );
}