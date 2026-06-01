import { client } from '@/lib/sanity' 
import EventCard from './etusivu/EventCard';

export default async function PastEvents() {

	const events = await client.fetch(
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
		<div className="mt-5">
			<h1 className="text-3xl">TAPAHTUMA-ARKISTO</h1>
			{events
				.filter(event => new Date(event.date) <= today)
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
	)
}