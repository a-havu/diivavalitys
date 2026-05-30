"use client";

import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Carousel() {

	const images = [
		"/frontp-1.jpeg",
		"/frontp-2.jpeg",
		"/frontp-3.jpeg",
		"/frontp-4.jpeg",
		"/frontp-5.jpeg",
	]

	const [index, setIndex] = useState (0);

	useEffect(() => {
		const timer = setTimeout(() => {
		setIndex(i => (i + 1) % images.length);
		}, 3000);
		return () => clearTimeout(timer);
	}, [index]);


    return(
        <div className="relative w-full h-full">
			<Image
				src={images[index]}
				alt="slideshow"
				fill
				className='object-cover'
				loading='eager'
				sizes="100vw"
			/>
        </div>
    );
}