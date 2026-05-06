import { client } from '@/lib/sanity'
import DivaGallery from '@/components/diivat/DivaGallery'

export default async function DivaPage() {
  const artists = await client.fetch(
			`*[_type == "artist"]{
		_id,
		name,
		slug,
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