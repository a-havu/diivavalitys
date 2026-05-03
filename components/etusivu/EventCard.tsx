import Link from "next/link"

export default function EventCard({ name, date, link }) {
  return link ? (
    <Link href={link}>
      <div className="flex flex-row bg-[#CE0074] mt-3 mb-3 p-4 text-white">
        <h2 className="text-2xl">{new Date(date).toLocaleDateString('fi-FI', {
            day: 'numeric',
            month: 'short',
            })}</h2>
        <h2>{name}</h2>
      </div>
    </Link>
  ) : (
    <div className="bg-[#CE0074] mb-3 p-4 text-white">
      <h3>{name}</h3>
      <h3>{new Date(date).toLocaleDateString('fi-FI', {
        day: 'numeric',
        month: 'short',
        })}</h3>
    </div>
  )
}