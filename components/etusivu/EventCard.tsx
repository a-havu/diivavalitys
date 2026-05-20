import Link from "next/link"

export default function EventCard({ name, date, link, artists }) {
  return link ? (
    <Link href={link}>
      <div className="cursor:pointer flex flex-row bg-[#CE0074] mt-1 mb-1 p-3 gap-9 text-white items-center rounded-sm md:min-w-100">
  <div className="flex flex-col items-center leading-tight w-10">
    <span className="text-4xl font-bold">
      {new Date(date).toLocaleDateString('fi-FI', { day: 'numeric' })}
    </span>
    <span className="text-xs uppercase">
      {new Date(date).toLocaleDateString('fi-FI', { month: 'short' })}
    </span>
  </div>
  <div>
  <h2 className="text-2xl font-bold">{name.toUpperCase()}</h2>
  <p className="text-xs mt-1">
    {artists?.map((artist: any) => artist.name).join(', ')}
  </p>
  </div>
</div>
    </Link>
  ) : (
	<div className="flex flex-row bg-[#CE0074] mt-1 mb-1 p-3 gap-9 text-white items-center rounded-sm md:min-w-100">
	<div className="flex flex-col items-center leading-tight w-10">
		<span className="text-4xl font-bold">
		{new Date(date).toLocaleDateString('fi-FI', { day: 'numeric' })}
		</span>
		<span className="text-xs uppercase">
		{new Date(date).toLocaleDateString('fi-FI', { month: 'short' })}
		</span>
	</div>
	<div>
	<h2 className="l-20 text-2xl font-bold">{name.toUpperCase()}</h2>
	<p className="text-xs mt-1">
    {artists?.map((artist: any) => artist.name).join(', ')}
  </p>
	</div>
	</div>
  )
}