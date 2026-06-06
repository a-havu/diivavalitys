import Link from "next/link"
import Image from "next/image"

type Link = {
  url: string
  platform: 'instagram' | 'facebook' | 'tiktok'
}

export default function ArtistLinks({ links }: { links: Link[] }) {
  const logos = {
    instagram: "/instagram.png",
    facebook: "/facebook.png",
    tiktok: "/tiktok.png",
  }

  return (
    <div className="flex flex-row">
      {links.map((link, i) => (
        <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="card-image m-3">
          <Image
            src={logos[link.platform] ?? "/default.png"}
            alt={`${link.platform} logo`}
            width={50}
            height={50}
          />
        </Link>
      ))}
    </div>
  )
}