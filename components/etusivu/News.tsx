import { client } from '@/lib/sanity'
import NewsList from './NewsList';

export default async function News({ frontpage }: {frontpage?: boolean}) {
    const news = await client.fetch(`*[_type == "story"] | order(_createdAt desc)`)
    return(
        <NewsList
        news={news}
        frontpage={frontpage}
        />
    );
}