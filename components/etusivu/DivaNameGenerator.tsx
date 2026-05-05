'use client'
import { useState } from 'react';

const firstNames = ['Lesbutin', 'Gay', 'Leidi']
const lastNames = ['Homola', 'Kaalipää', 'Slick']

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
                <p>Diivanimesi on: </p>
            {name && <p className="text-lg font-bold text-[#CE0074] ml-1">{name}</p>}
                </div>
        </div>
     )
}