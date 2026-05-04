import { client } from '@/lib/sanity'
import DivaGallery from '@/components/diivat/DivaGallery'

export default async function DivaPage() {
  const artists = await client.fetch(
    `*[_type == "artist"] | order(lower(name) asc) { _id, name, photo, slug, tags }`,
    {},
    { next: { revalidate: 60 } }
  )
  return <DivaGallery artists={artists} />
}