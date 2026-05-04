import Image from 'next/image'

export default function Carousel() {
    return(
        <div className="relative w-full h-full">
        <Image
        src="/hom.jpg"
        alt="logo"
        fill
        className="object-cover"
        />
        </div>
    );
}