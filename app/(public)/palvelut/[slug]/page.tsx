import { client } from '@/lib/sanity'
import Grainient from '@/components/Grainient'
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'

export async function generateStaticParams() {
  const services = await client.fetch(`*[_type == "service"]{ slug }`)
  return services.map((service: any) => ({
    slug: service.slug.current
  }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    
    const service = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  )

    return(
        <div className="relative flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-20 border-2 border-[#ce0074] rounded-lg bg-white/50 md:m-10">
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
        src={urlFor(service.photo)}
        alt={service.name}
        width={300}
        height={300}
        className="object-contain rounded-md flex-1 h-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div>
            <h2 className="flex justify-center mb-2 text-3xl">{service.name}</h2>
            <p>{service.description}</p>
        </div>
        </div>
    )
}