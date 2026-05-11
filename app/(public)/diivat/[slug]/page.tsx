import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import "react-image-grid-gallery/style.css";
import ArtistImageGallery from '@/components/diivat/ArtistImageGallery';

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

  return (
	<>
  <div className="h-">
    <Image
    src={urlFor(artist.photos[0])}
    alt={artist.name}
    width={600}
    height={0}
    />
	<h1 className="flex justify-center text-6xl mt-9 mb-5">{artist.name.toUpperCase()}</h1>
  </div>
    <div className="flex flex-row ml-30 mr-30">
	<div className="columns-2 md:columns-2 flex-1 gap-1">
		<ArtistImageGallery photos={artist.photos} />
		</div>
      <div className="flex-1">
      <PortableText value={artist.bio} />
      </div>
	  </div>
	</>
  )
}