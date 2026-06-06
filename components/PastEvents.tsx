import { client } from '@/lib/sanity' 
import EventCard from './etusivu/EventCard';

type Event = {
  _id: string
  name: string
  date: string
  link: string
  artists: string[]
}

export default async function PastEvents() {

	const events: Event[] = await client.fetch(
		`*[_type == "event"] | order(date desc) {
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
		<div className="md:mt-10">
			<h1 className="text-2xl md:text-3xl mb-3">MENNEET TAPAHTUMAT</h1>
			{events
				.filter(event => new Date(event.date) <= today)
				.map(event => (
					  <EventCard
					  key={event._id}
					  name={event.name}
					  date={event.date}
					  link={event.link}
					  artists={event.artists}
					  past={true}
					  />
				  ))}
		</div>
	)
}