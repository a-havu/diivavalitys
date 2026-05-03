import { client } from '@/lib/sanity'
import NewsCard from '@/components/etusivu/NewsCard'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source).width(400).height(400)

export default async function News() {
    const news = await client.fetch(`*[_type == "story"] | order(date asc)`)
    return(
        <div>
        <h1>Ajankohtaista</h1>
        {news.map(story => (
          <NewsCard
          key={story._id}
          name={story.name}
          oneliner={story.oneliner}
          photo={urlFor(story.photo).url()}
          />
      ))}
      </div>
    );
}