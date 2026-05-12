'use client'
import { useState } from 'react'
import Link from 'next/link'
import DivaCard from './DivaCard'

const ALL_TAGS = ['drag', 'dj', 'juontaja', 'laulaja']

export default function DivaGallery({ artists }: { artists: any[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? artists.filter(artist => artist.tags?.includes(activeTag))
    : artists
  return (
    <div>
      <div className="md:flex jus-center gap-2 m-8">
        <button
          onClick={() => setActiveTag(null)}
           className={`px-4 py-2 rounded-sm border transition-colors ${
          activeTag === null
        ? 'bg-[#CE0074] text-white border-[#CE0074] m-2'
        : 'bg-transparent text-black border-[#CE0074] hover:bg-[#CE0074] hover:text-white m-5'
        }`}
        >
          KAIKKI
        </button>
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
             className={`px-4 py-2 rounded-sm border transition-colors ${
            activeTag === tag
              ? 'bg-[#CE0074] text-white border-[#CE0074] m-2'
              : 'bg-transparent text-black border-[#CE0074] m-2 hover:bg-[#CE0074] hover:text-white'
          }`}
          >
            {tag.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 p-8">
        {filtered.map(artist => (
          <div key={artist._id}>
              <Link href={`/diivat/${artist.slug.current}`}>
                <DivaCard name={artist.name} photo={artist.photos[0]} />
              </Link>
          </div>
        ))}
      </div>
    </div>
  )
}