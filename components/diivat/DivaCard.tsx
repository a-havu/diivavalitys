'use client'

import Image from "next/image";
import { urlFor } from '@/lib/urlFor'

export default function DivaCard({name, photo}: { name: string, photo: any }) {

	const hotspot = photo.hotspot
    return (
      <div className="bg-white border border-[#CE0074] rounded-lg shadow-sm hover:shadow-lg shadow-[#CE0074]">
        <div className="card-image relative w-full h-40 md:h-80 aspect-4/4 flex flex-col rounded-t-lg overflow-hidden">
          <Image
            src={urlFor(photo)}
            alt={name}
            fill
            className="object-cover"
			style={{ 
			objectPosition: hotspot ? `${hotspot.x * 100}% ${hotspot.y * 100}%` : 'center'
		}}
          />
          </div>
          <div>
          <h3 className="flex justify-center p-2">{name.toUpperCase()}</h3>
          </div>
        </div>
    );
}