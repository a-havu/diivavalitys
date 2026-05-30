'use client'

import Image from "next/image";
import { urlFor } from '@/lib/urlFor'

export default function DivaCard({name, photo}: { name: string, photo: any }) {
    return (
      <div className="bg-white border border-[#CE0074] rounded-lg shadow-sm hover:shadow-lg shadow-[#CE0074]">
        <div className="relative w-full aspect-4/4 flex flex-col rounded-t-lg overflow-hidden">
          <Image
            src={urlFor(photo)}
            alt={name}
            fill
            className="object-cover h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          </div>
          <div>
          <h3 className="flex justify-center p-2">{name}</h3>
          </div>
        </div>
    );
}