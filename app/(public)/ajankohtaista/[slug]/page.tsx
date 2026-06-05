import { client } from '@/lib/sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/urlFor'
import Grainient from '@/components/Grainient'

export async function generateStaticParams() {
  const stories = await client.fetch(`*[_type == "story"]{ slug }`)
  return stories.map((story: any) => ({
    slug: story.slug.current
  }))
}

export async function generateMetadata(
	{ params }: { params: Promise<{ slug: string }>}
): Promise<Metadata> {
	const { slug } = await params;
	const story = await client.fetch(
		`*[_type == "story" && slug.current == $slug][0]`,
		{ slug }
	);
	return {
    title: story?.name ?? "",
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const story = await client.fetch(
    `*[_type == "story" && slug.current == $slug][0]`,
    { slug }
  )

  return (
    <div className="relative flex flex-row gap-10 p-20">
		<style>
			{`
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/cursor.png'), auto;
          }

          button:hover, a:hover, input:hover, .hover:hover {
            cursor: url('/pointer.png'), auto;
          }
			`}
		</style>
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
      <Image
        src={urlFor(story.photo)}
        alt={story.name}
        width={300}
        height={300}
        className="object-contain rounded-md flex-1 h-auto"
      />
      <div className="p-5 flex-1">
      <h1 className="text-2xl mb-1">{story.name}</h1>
      <p className="text-xs mb-3">{new Date(story._createdAt).toLocaleDateString('fi-FI')}</p>
      	<div className="prose prose-a:text-[#ce0074] prose-a:underline">
	<PortableText value={story.story} />
	</div>
      </div>
    </div>
  )
}