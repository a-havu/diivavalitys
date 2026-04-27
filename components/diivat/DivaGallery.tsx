import Image from 'next/image'
import { client } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source).url()

export default async function DivaGallery() {
  const artists = await client.fetch(`*[_type == "artist"]`)
  
  return (
    <div>
      {artists.map(artist => (
        <div key={artist._id}>
          <DivaCard />
        </div>
      ))}
    </div>
  )
}