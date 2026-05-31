"use client"

import Image from "next/image";
import { useState, useEffect } from 'react'
import { urlFor } from '@/lib/urlFor'

export default function DisplayCarousel({ images }) {
	const [index, setIndex] = useState (0);

	useEffect(() => {
		if (!images?.length) return;
		const timer = setTimeout(() => {
		setIndex(i => (i + 1) % images.length);
		}, 3000);
		return () => clearTimeout(timer);
	}, [index]);

	if (!images?.length) return null;
	const { x, y } = images[index]?.hotspot ?? { x: 0.5, y: 0.5 }

		return(
			<div className="relative w-full h-full">
				<Image
					src={urlFor(images[index])}
					alt="slideshow"
					fill
					className='object-cover'
					loading='eager'
					style={{ objectPosition: `${x * 100}% ${y * 100}%` }}
					sizes="100vw"
				/>
			</div>
		);

}