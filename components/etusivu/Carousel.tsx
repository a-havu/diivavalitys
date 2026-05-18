import Image from 'next/image'

export default function Carousel() {
    return(
        <div className="relative w-full h-full">
        <Image
        src="/hom.jpg"
        alt="logo"
        fill
        className="object-cover h-auto"
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        </div>
    );
}