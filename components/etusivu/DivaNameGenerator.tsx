'use client'
import { useState } from 'react';

const firstNames = ['Lesbutin', 'Gay', 'Leidi', 'Kylie', 'The Diva']
const lastNames = ['Homola', 'Kaalipää', 'Worm', 'Minogue', 'Guggenheim']

export default function DivaNameGenerator() {
     const [name, setName] = useState<string | null>(null)

     const generate = () => {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)]
        const last = lastNames[Math.floor(Math.random() * lastNames.length)]
        setName(`${first} ${last}`)
     }
     return(
        <div>
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