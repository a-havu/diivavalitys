import createImageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanity'

const builder = createImageUrlBuilder(client)

export const urlFor = (source: any): string => {
  if (!source?.asset) return ''
  return builder
    .image(source)
    .fit('crop')
    .crop('focalpoint')
    .quality(90)
    .url()
}