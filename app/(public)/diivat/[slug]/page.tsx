import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import "react-image-grid-gallery/style.css";
import ArtistImageGallery from '@/components/diivat/ArtistImageGallery';
import EventCard from '@/components/etusivu/EventCard';
import Link from 'next/link';
import Grainient from '@/components/Grainient';

export async function generateStaticParams() {
  const artists = await client.fetch(`*[_type == "artist"]{ slug }`)
  return artists.map((artist: any) => ({
    slug: artist.slug.current
  }))
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const artist = await client.fetch(
    `*[_type == "artist" && slug.current == $slug][0]`,
    { slug }
  )

  const events = await client.fetch(
     `*[_type == "event" && references($artistId) && date >= $today] | order(date asc) {
     _id,
     name,
     date,
     link
     }`,
     {
      artistId: artist._id,
      today: new Date().toISOString()
     }
  )
  const hotspot = artist.photos[0]?.hotspot

  return (
	<div className="relative flex flex-col items-center">
    <div className="fixed inset-0 -z-10">
	<Grainient
		color1="F2D4EC"
		color2="#F8CEE6"
		color3="#ce0074"
		timeSpeed={0.5}
		colorBalance={-0.24}
		warpStrength={1.95}
		warpFrequency={1.6}
		warpSpeed={2}
		warpAmplitude={50}
		blendAngle={-138}
		blendSoftness={0.25}
		rotationAmount={500}
		noiseScale={2}
		grainAmount={0.1}
		grainScale={2}
		grainAnimated={false}
		contrast={1.35}
		gamma={1}
		saturation={1.15}
		centerX={0}
		centerY={0}
		zoom={0.9}>
			</Grainient>
			</div>
  <div className="relative w-full h-50 md:h-100 mb-10">
	<Image
	src={urlFor(artist.photos[0])}
	alt={artist.name}
	fill
	className="object-cover"
	style={{ 
		zIndex: -10,
		objectPosition: hotspot ? `${hotspot.x * 100}% ${hotspot.y * 100}%` : 'center'
	}}
	sizes="100vw"
	/>
	<span className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
  <h1 className="md:text-9xl text-5xl text-shadow-lg/300 text-white text-center">
  {artist.name.toUpperCase()}
  </h1>
  </span>
  </div>
    <div className="flex flex-col md:flex-row ml-5 mr-5 md:ml-30 md:mr-30 gap-4">
	<div className="columns-2 md:columns-2 flex-1 gap-1">
		<ArtistImageGallery photos={artist.photos} />
		</div>
      <div className="flex-1">
      <PortableText value={artist.bio} />
      </div>
	  </div>
    {events.length > 0 ? (
    <div className="md:mt-5 md:mb-10 m-5">
      <h2>Missä nähdä tämä diiva:</h2>
      {events.map(event => (
        <EventCard
          key={event._id}
          name={event.name}
          date={event.date}
          link={event.link}
          artists={[]}
        />
      ))}
    </div>
  ) : (
    <>
    <p className="mt-5">Tällä diivalla ei ole tulevia keikkoja.</p>
    <Link href="/otayhteytta" className="text-[#ce0074] font-bold mb-5">Buukkaa tästä!</Link>
    </>
  )}
	</div>
  )
}