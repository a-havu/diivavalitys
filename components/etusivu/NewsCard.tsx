import Image from 'next/image'
import { client } from '@/lib/sanity'

export default function NewsCard({name, oneliner, photo, date}) {
  return (
    <div className="card-image relative flex flex-row gap-6 mt-3 mb-3 md:w-150 border border-[#ce0074] rounded-lg p-3 border-2 bg-white cursor-pointer">
      <div className="relative w-24 h-24 shrink-0">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded h-auto"
        />
      </div>
      <div>
        <h1 className="text-lg">{name}</h1>
        <p className="text-sm">{oneliner}</p>
        <p className="text-xs mt-1">{date}</p>
      </div>
    </div>
  )
}