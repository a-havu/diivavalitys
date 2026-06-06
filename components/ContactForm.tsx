'use client'
import { useForm } from 'react-hook-form'

type FormData = {
    name: string
    email: string
    message: string
    date: string
    budget: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm<FormData>()
    
    const onSubmit = async (data: FormData) => {
	try {
		const res = await fetch('/api/contact', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
		})
		const json = await res.json()
		console.log(json)

		if (json.success) {
		reset()
		} else {
			console.error('Lähetys epäonnistui')
		}
		} catch (e) {
			console.error(e)
		}
	}
    
    return(
        <div className="flex flex-col w-80 md:w-100 bg-[#CE0074] p-4 rounded-lg text-sm">
            <form suppressHydrationWarning onSubmit={handleSubmit(onSubmit)}>
			
			<div className="flex flex-col gap-2">
			
			<label className="ml-1 text-white text-lg">Nimi *
            <input
            placeholder="Diiva Diivanen"
            className="text-black placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1 w-70 md:w-90"
            {...register('name', { required: 'Nimi tarvitaan' })}
            />
            {errors.name && <p className="text-white text-sm ml-1 flex justify-end">{errors.name.message}</p>}
			</label>

          <label className="ml-1 text-white text-lg">Sähköpostiosoite *
          <input
            placeholder="diiva@diivas.fi"
            className="text-black placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1 w-70 md:w-90"
            {...register('email', {
                required: 'Sähköpostiosoite tarvitaan',
                pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Väärä sähköpostiosoite'
                }
            })}
            />
            {errors.email && <p className="text-white text-sm ml-1 flex justify-end">{errors.email.message}</p>}
			</label>

            <label className="ml-1 text-white text-lg">Tapahtuman ajankohta
            <input
            placeholder="Arvio riittää"
            className="text-black placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1 w-70 md:w-90"
            {...register('date')}
            />
			</label>

            <label className="ml-1 text-white text-lg">Budjetti
            <input
            placeholder="Arvio riittää"
            className="text-black placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1 w-70 md:w-90"
            {...register('budget')}
            />
			</label>

            <label className="ml-1 text-white text-lg">Viestisi *
            <textarea
            placeholder="Viesti..."
            className="text-black placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1 w-70 md:w-90"
            {...register('message', { required: 'Viesti tarvitaan' })}
            />
            {errors.message && <p className="text-white text-sm ml-1 flex justify-end">{errors.message.message}</p>}
			</label>
			</div>

			<label className="ml-1 mt-5 text-white text-lg flex items-center gap-2">
			<input type="radio" name="contactType" value="tarjouspyyntö"/>
			Tarjouspyyntö
			</label>
			<label className="ml-1 text-white text-lg flex items-center gap-2">
			<input type="radio" name="contactType" value="palaute" />
			Palaute
			</label>
			<label className="ml-1 text-white text-lg flex items-center gap-2 mb-5">
			<input type="radio" name="contactType" value="muu" />
			Muu yhteydenotto
			</label>

            <div className="flex justify-center font-bold">
              <button
                className="bg-white w-35 h-10 rounded-full mt-5 cursor-pointer text-md"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                >
                    {isSubmitting ? 'Lähetetään...' : 'LÄHETÄ'}
            </button>
			</div>
            {isSubmitSuccessful && <p className="text-white p-2 flex justify-center">Viesti lähetetty!</p>}
        </form>
		</div>
    );
}