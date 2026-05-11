import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import "react-image-grid-gallery/style.css";
import ArtistImageGallery from '@/components/diivat/ArtistImageGallery';
import EventCard from '@/components/etusivu/EventCard';

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

  return (
	<div className="flex flex-col items-center">
  <div className="relative w-full h-100 mb-10">
    <Image
    src={urlFor(artist.photos[0])}
    alt={artist.name}
    fill
    className="object-cover"
    style={{ zIndex: -10 }}
    />
	<span className="text-9xl text-shadow-lg/300 absolute bottom-3 left-1/2 -translate-x-1/2 text-white rounded-lg p-2">
  <h1>{artist.name.toUpperCase()}</h1></span>
  </div>
    <div className="flex flex-row ml-30 mr-30 gap-4">
	<div className="columns-2 md:columns-2 flex-1 gap-1">
		<ArtistImageGallery photos={artist.photos} />
		</div>
      <div className="flex-1">
      <PortableText value={artist.bio} />
      </div>
	  </div>
    {events.length > 0 ? (
    <div className="mt-5 mb-10">
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
    <p>no giggies</p>
  )}
	</div>
  )
}