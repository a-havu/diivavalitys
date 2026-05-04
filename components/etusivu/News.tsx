import { client } from '@/lib/sanity'
import NewsCard from '@/components/etusivu/NewsCard'
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';

const builder = imageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source).width(400).height(400)

export default async function News() {
    const news = await client.fetch(`*[_type == "story"] | order(date desc)`)
    return(
        <div>
        <h1 className="text-2xl">Ajankohtaista</h1>
        {news.map(story => (
            story.slug?.current ? (
        <Link key={story._id} href={`/ajankohtaista/${story.slug.current}`}>
            <NewsCard
            name={story.name}
            oneliner={story.oneliner}
            photo={urlFor(story.photo).url()}
            />
        </Link>
            ) : null
        ))}
      </div>
    );
}