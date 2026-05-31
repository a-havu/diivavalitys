export const carousel = {
	name: 'carousel',
	title: 'Carousel Photos',
	type: 'document',
	fields: [
	{name: 'name', title: 'name', type: 'string'},
	{name: 'carouselPhotos', title: 'Photos', type: 'array',
	of: [
		{
			type: 'image',
			options: { hotspot: true },
		}
		]
	}
	]
}