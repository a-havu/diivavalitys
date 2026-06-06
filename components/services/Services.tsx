import ServiceCard from './ServiceCard';
import { client } from '@/lib/sanity'
import Link from 'next/link';

type Service = {
  _id: string
  name: string
  date: string
  link: string
  slug: { current: string }
  photo: any
}

export default async function Services() {
	const services: Service[] = await client.fetch(`*[_type == "service"] | order(index asc)`)
	return(
		<div className="flex flex-col md:grid grid-cols-3 m-9 gap-4 md:gap-9">
			{services.map(service => (
				<Link key={service._id} href={`/palvelut/${service.slug.current}`}>
				<ServiceCard
				key={service._id}
				name={service.name}
				photo={service.photo}
				/>
				</Link>
			))}
		</div>
	);
}