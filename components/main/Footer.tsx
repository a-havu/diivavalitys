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
            height={0}
            loading="eager"
            />
            <p className="mt-6">info@diivavalitys.fi</p>
            <p>+358 45 7831 0826</p>
            <p className="mt-4">Diivakonserni Oy</p>
            <p>Y-tunnus: 3513385-8</p>
            </div>
            <div className="flex flex-row p-4 gap-3">
                <Link href="">
                <Image
                src="/fb.png"
                alt="instagram"
                width={25}
                height={25}
                />
                </Link>
                <Link href="">
                <Image
                src="/insta.png"
                alt="instagram"
                width={25}
                height={25}
                />
                </Link>
                <Link href="">
                <Image
                src="/tiktok.png"
                alt="instagram"
                width={25}
                height={25}
                />
                </Link>
            </div>
        </footer>
    );
}