import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity'

export default function NewsCard({name, oneliner, photo}) {
    return (
        <div className="flex flex-row gap-6 mt-3 mb-3">
            <Image
            src={photo}
            alt={name}
            width={100}
            height={0}
            />
            <div>
            <h1>{name}</h1>
            <h3>{oneliner}</h3>
            </div>
        </div>
    )
}