"use client"

import NewsCard from "./NewsCard"
import Link from "next/link"
import { urlFor } from '@/lib/urlFor'

export default function NewsList({ news, frontpage }: { news: any[], frontpage?: boolean }) {
    return(
        <div>
        <h1 className="flex text-2xl md:justify-start justify-center">Ajankohtaista</h1>
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
    )
}