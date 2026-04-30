import { client } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import DivaCard from "@/components/diivat/DivaCard"
import Link from 'next/link'

export default async function DivaGallery() {
  const artists = await client.fetch(`*[_type == "artist"] | order(name asc)`)
  
  return (
    <div className="grid grid-cols-4 gap-8 p-8">
      {artists.map(artist => (
        <Link href={`/diivat/${artist.slug.current}`}>
          <DivaCard 
          name={artist.name}
          photo={artist.photo}/>
        </Link>
      ))}
      {/* {artists.map(artist => (
  <div key={artist._id}>
    {artist.slug?.current ? (
      <Link href={`/diivat/${artist.slug.current}`}>
        <DivaCard
          name={artist.name}
          photo={artist.photo}
        />
      </Link>
    ) : (
      <DivaCard
        name={artist.name}
        photo={artist.photo}
      />
    )}
  </div>
))} */}
    </div>
  )
}