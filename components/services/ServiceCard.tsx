"use client"

import Image from "next/image"
import { urlFor } from "@/lib/urlFor"

export default function ServiceCard( {name, photo, description}: {name: string, photo: any, description: string}) {
    
    return(
        <div
		className="rounded-lg overflow-clip bg-white w-90 md:w-120 m-5 md:mb-10 border-2 border-[#ce0074] hover:shadow-lg shadow-[#CE0074]"
        >
            <div className="relative min-h-60 rounded-lg">
            <span className="z-40 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
            <h2 className="z-40 text-3xl text-white flex justify-center">{name}</h2>
            </span>
            <Image
            src={urlFor(photo)}
            alt={name}
            fill
            className="object-cover z-0 h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            </div>
            </div>
    )
}