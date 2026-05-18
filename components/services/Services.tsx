import ServiceCard from './ServiceCard';
import { client } from '@/lib/sanity'
import Link from 'next/link';

export default async function Services() {
	const services = await client.fetch(`*[_type == "service"] | order(index asc)`)
	return(
		<div className="flex flex-col md:grid grid-cols-2">
			{services.map(service => (
				<Link key={service._id} href={`/palvelut/${service.slug.current}`}>
				<ServiceCard
				key={service._id}
				name={service.name}
				description={service.description}
				photo={service.photo}
				/>
				</Link>
			))}
		</div>
	);
}