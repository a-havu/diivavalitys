import { client } from '@/lib/sanity'
import NewsCard from '@/components/etusivu/NewsCard'
import { urlFor } from '@/lib/urlFor'
import Link from 'next/link';

export default async function News({ frontpage }: {frontpage?: boolean}) {
    const news = await client.fetch(`*[_type == "story"] | order(date desc)`)
    return(
        <div>
        <h1 className="text-2xl">Ajankohtaista</h1>
        {news
        .filter(story => !frontpage || story.etusivulle)
        .map(story => (
            story.slug?.current ? (
        <Link key={story._id} href={`/ajankohtaista/${story.slug.current}`}>
            <NewsCard
            name={story.name}
            oneliner={story.oneliner}
            photo={urlFor(story.photo)}
            date={new Date(story._createdAt).toLocaleDateString('fi-FI')}
            />
        </Link>
            ) : null
        ))}
      </div>
    );
}