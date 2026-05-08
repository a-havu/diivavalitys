import ServiceCard from './ServiceCard';
import { client } from '@/lib/sanity'

export default async function Services() {
	const services = await client.fetch(`*[_type == "service"] | order(index desc)`)
	return(
		<div className="grid grid-cols-2">
			{services.map(service => (
				<ServiceCard
				key={service._id}
				name={service.name}
				description={service.description}
				photo={service.photo}
				/>
			))}
		</div>
	);
}