'use client'
import { useState } from 'react'
import Link from 'next/link'
import DivaCard from './DivaCard'

const ALL_TAGS = ['DJ', 'Juonto']

export default function DivaGallery({ artists }: { artists: any[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? artists.filter(artist => artist.tags?.includes(activeTag))
    : artists

  return (
    <div>
      <div className="flex justify-center gap-2 m-8">
        <button
          onClick={() => setActiveTag(null)}
           className={`px-4 py-2 rounded-sm border transition-colors ${
          activeTag === null
        ? 'bg-black text-white border-black'
        : 'bg-transparent text-black border-black hover:bg-black hover:text-white'
        }`}
        >
          Kaikki
        </button>
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
             className={`px-4 py-2 rounded-sm border transition-colors ${
            activeTag === null
              ? 'bg-black text-white border-black'
              : 'bg-transparent text-black border-black hover:bg-black hover:text-white'
          }`}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-8 p-8">
        {filtered.map(artist => (
          <div key={artist._id}>
            {artist.slug?.current ? (
              <Link href={`/diivat/${artist.slug.current}`}>
                <DivaCard name={artist.name} photo={artist.photo} />
              </Link>
            ) : (
              <DivaCard name={artist.name} photo={artist.photo} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}