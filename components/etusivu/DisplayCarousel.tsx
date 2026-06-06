"use client"

import Image from "next/image";
import { useState, useEffect } from 'react'
import { urlFor } from '@/lib/urlFor'

type SanityImage = {
  asset: {
    _ref: string
    _type: string
  }
  hotspot?: {
    x: number
    y: number
  }
}

export default function DisplayCarousel({ images }: {images: SanityImage[]}) {
	const [index, setIndex] = useState (0);

	useEffect(() => {
		if (!images?.length) return;
		const timer = setTimeout(() => {
		setIndex(i => (i + 1) % images.length);
		}, 3000);
		return () => clearTimeout(timer);
	}, [index]);

	if (!images?.length) return null;
	const hotspot = images[index]?.hotspot
	const objectPosition = hotspot ? `${hotspot.x * 100}% ${hotspot.y * 100}%` : 'center'

	return (
  <div className="relative w-full md:h-full h-100">
    {images.map((image, i) => {
      const hotspot = image?.hotspot
      const objectPosition = hotspot ? `${hotspot.x * 100}% ${hotspot.y * 100}%` : 'center'
      return (
        <Image
          key={i}
          src={urlFor(image)}
          alt="slideshow"
          fill
          priority
          className='object-cover transition-opacity duration-700'
          style={{ 
            zIndex: i === index ? 1 : 0,
            objectPosition,
            opacity: i === index ? 1 : 0,
          }}
          sizes="100vw"
        />
      )
    })}
  </div>
)

}