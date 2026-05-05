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
    <div className="flex flex-row p-20">
      <Image
        src={urlFor(artist.photo)}
        alt={artist.name}
        width={400}
        height={400}
      />
      <div className="p-5">
      <h1>{artist.name}</h1>
      <PortableText value={artist.bio} />
      </div>
    </div>
  )
}