import { client } from '@/lib/sanity'
import Grainient from '@/components/Grainient'
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from "next"

export async function generateStaticParams() {
  const services = await client.fetch(`*[_type == "service"]{ slug }`)
  return services.map((service: any) => ({
    slug: service.slug.current
  }))
}

export async function generateMetadata(
	{ params }: { params: Promise<{ slug: string }>}
): Promise<Metadata> {
	const { slug } = await params;
	const service = await client.fetch(
		`*[_type == "service" && slug.current == $slug][0]`,
		{ slug }
	);
	return {
    title: service?.name ?? "",
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    
    const service = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  )

  const hotspot = service.photo?.hotspot

    return(
        <div className="relative flex flex-col gap-5 md:gap-10 p-5 border-2 border-[#ce0074] rounded-lg bg-white/50 md:m-10">
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
		  <div className="relative w-full h-50 md:h-100">
			<Image
			src={urlFor(service.photo)}
			alt={service.name}
			fill
			className="object-cover rounded-lg"
			style={{ 
				objectPosition: hotspot ? `${hotspot.x * 100}% ${hotspot.y * 100}%` : 'center'
			}}
			sizes="100vw"
			/>
			<span className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/70 to-transparent p-4">
		  <h1 className="text-3xl md:text-6xl text-shadow-lg/300 text-white text-center">
		  {service.name.toUpperCase()}
		  </h1>
		  </span>
		  </div>
            <p className="text-lg p-5">{service.description}</p>
			<Link href="/otayhteytta" className="text-[#ce0074] text-xl font-bold p-5">Pyydä tarjous!</Link>
        </div>
    )
}