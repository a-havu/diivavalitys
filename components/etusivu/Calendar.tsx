import { client } from '@/lib/sanity'
import EventCard from '@/components/etusivu/EventCard'

export default async function Calendar() {
    const events = await client.fetch(`*[_type == "event"] | order(name asc)`)
    return(
        <div>
        <h1 className="text-2xl">Näe ja koe diivat</h1>
        {events.map(event => (
          <EventCard
          key={event._id}
          name={event.name}
          date={event.date}
          link={event.link}
          />
      ))}
      </div>
    );
}