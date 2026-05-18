import { client } from '@/lib/sanity'
import DivaGallery from '@/components/diivat/DivaGallery'

export default async function DivaPage() {
  const artists = await client.fetch(
			`*[_type == "artist"] | order(name asc) {
		_id,
		name,
		slug,
		tags,
		photos[]{
			_key,
			asset->,
			alt,
			hotspot
		}
		}`,
    {},
    { next: { revalidate: 60 } }
  )
  return <DivaGallery artists={artists} />
}