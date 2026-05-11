import { client } from '@/lib/sanity'
import EventCard from '@/components/etusivu/EventCard'

export default async function Calendar({frontpage}: { frontpage?: boolean }) {
    const events = await client.fetch(
    `*[_type == "event"] | order(date asc) {
        _id,
        name,
        date,
        link,
        etusivulle,
        artists[]-> { _id, name, slug },
    }`
    )

    const today = new Date();
    today.setHours(0, 0, 0, 0)

    return(
        <div>
        <h1 className="text-2xl">Näe ja koe diivat</h1>
        {events
        .filter(event => new Date(event.date) >= today)
        .filter(event => !frontpage || event.etusivulle)
        .map(event => (
          <EventCard
          key={event._id}
          name={event.name}
          date={event.date}
          link={event.link}
          artists={event.artists}
          />
      ))}
      </div>
    );
}