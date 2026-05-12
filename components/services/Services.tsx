import ServiceCard from './ServiceCard';
import { client } from '@/lib/sanity'

export default async function Services() {
	const services = await client.fetch(`*[_type == "service"] | order(index desc)`)
	return(
		<div className="flex flex-col">
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