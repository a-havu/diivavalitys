import Image from "next/image";

export default function Footer() {
    return(
        <footer className="bg-[#CE0074] p-5 text-xs">
            <div className="flex flex-col items-center text-white">
            <Image
            src="/valk-logo.png"
            alt="logo"
            width={150}
            height={0}
            loading="eager"
            />
            <p>info@diivavalitys.fi</p>
            <p>+358 45 7831 0826</p>
            <p className="mt-4">Diivakonserni Oy</p>
            <p>Y-tunnus: 3513385-8</p>
            </div>
        </footer>
    );
}