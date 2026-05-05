import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

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
	<h1 className="flex justify-center text-6xl mt-9">{artist.name.toUpperCase()}</h1>
    <div className="relative w-full flex flex-row p-10 gap-10">
      <Image
        src={urlFor(artist.photo)}
        alt={artist.name}
        width={600}
        height={0}
		className="rounded-lg object-cover w-500"
      />
      <div className="p-5">
      <PortableText value={artist.bio} />
      </div>
    </div>
	</>
  )
}