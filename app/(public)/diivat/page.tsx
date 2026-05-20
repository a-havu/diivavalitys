import { client } from '@/lib/sanity'
import DivaGallery from '@/components/diivat/DivaGallery'
import Grainient from '@/components/Grainient'

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
			hotspot,
			crop,
			alt
		}
		}`,
    {},
    { next: { revalidate: 60 } },
  )
  return (
	<div className='relative'>
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
  <DivaGallery artists={artists} />
  </div>
)
}