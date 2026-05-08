"use client"

import Image from "next/image"
import { urlFor } from "@/lib/urlFor"
import { useState } from 'react'

export default function ServiceCard( {name, photo, description}: {name: string, photo: any, description: string}) {
    const [open, setOpen] = useState(false)
    
    return(
        <div
        className="w-100 ml-30 mr-30 cursor-pointer mb-10"
        onClick={() => setOpen(!open)}
        >
            <h2>{name}</h2>
            <Image
            src={urlFor(photo)}
            alt={name}
            width={200}
            height={100}
            className="object-none"
            />
            {open &&
            <p className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {description}</p>}
            </div>
    )
}