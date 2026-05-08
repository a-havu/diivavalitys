'use client'
import { useState, useEffect } from 'react';
import { client } from "@/lib/sanity"

const firstNames = ['Lesbutin', 'Gay', 'Leidi', 'Kylie', 'The Diva']
const lastNames = ['Homola', 'Kaalipää', 'Worm', 'Minogue', 'Guggenheim']

export default function DivaNameGenerator() {
     const [firstNames, setFirstNames] = useState<string[]>([])
     const [lastNames, setLastNames] = useState<string[]>([])
     const [name, setName] = useState<string | null>(null)

   useEffect(() => {
      client.fetch(`*[_type == "divaName"][0]`).then(data => {
         if (data) {
         setFirstNames(data.firstNames || [])
         setLastNames(data.lastNames || [])
         }
      })
   }, [])


     const generate = () => {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)]
        const last = lastNames[Math.floor(Math.random() * lastNames.length)]
        setName(`${first} ${last}`)
     }
     return(
        <div className="ml-10">
            <div>
            <button
            onClick={generate}
            className="bg-[#CE0074] text-white rounded-lg p-4">Generoi oma diivanimesi!</button>
            </div>
            <div className="flex flex-col items-center p-2">
			{name && (
				<div className="flex flex-col items-center">
				<p>Diivanimesi on:</p>
				<span className="text-lg font-bold text-[#CE0074]">{name}</span>
				</div>
			)}
			</div>
        </div>
     )
}