import { client } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

const builder = imageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source).width(400).height(400).url()

export async function generateStaticParams() {
  const stories = await client.fetch(`*[_type == "story"]{ slug }`)
  return stories.map((story: any) => ({
    slug: story.slug.current
  }))
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const story = await client.fetch(
    `*[_type == "story" && slug.current == $slug][0]`,
    { slug }
  )

  return (
    <div className="flex flex-row p-20">
      <Image
        src={urlFor(story.photo)}
        alt={story.name}
        width={400}
        height={400}
      />
      <div className="p-5">
      <h1 className="text-2xl mb-3">{story.name}</h1>
      <PortableText value={story.story} />
      </div>
    </div>
  )
}