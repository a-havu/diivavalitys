import { client } from '@/lib/sanity'
import DisplayCarousel from './DisplayCarousel';

export default async function Carousel() {

	const images = await client.fetch(`*[_type == "carousel"][0].carouselPhotos`)

    return(
        <DisplayCarousel
		images={images}
		/>
    );
}