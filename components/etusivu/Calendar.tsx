import { client } from '@/lib/sanity'
import EventCard from '@/components/etusivu/EventCard'

export default async function Calendar() {
    const events = await client.fetch(
    `*[_type == "event"] | order(date asc) {
        _id,
        name,
        date,
        link,
        artists[]-> { _id, name, slug }
    }`
    )
    return(
        <div>
        <h1 className="text-2xl">Näe ja koe diivat</h1>
        {events.map(event => (
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