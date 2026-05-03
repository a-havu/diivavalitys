import Image from 'next/image'

export default function Carousel() {
    return(
        <div className="flex justify-center p-20">
        <Image
        src="/logoprimary.png"
        alt="logo"
        width={200}
        height={40}
        />
        </div>
    );
}