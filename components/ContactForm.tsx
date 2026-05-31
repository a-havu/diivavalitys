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
    if (res.ok) {
      reset()
    }
  } catch (e) {
    console.error(e)
  }
}
    
    return(
        <div className="flex flex-col md:w-100 bg-[#CE0074] p-4 rounded-lg text-sm">
            <p className="ml-1 mt-3 text-white">Nimi *</p>
            <input
            placeholder="Diiva Diivanen"
            className="placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1"
            {...register('name', { required: 'Nimi tarvitaan' })}
            />
            {errors.name && <p className="text-white text-sm ml-1 flex justify-end">{errors.name.message}</p>}

          <p className="ml-1 mt-3 text-white">Sähköpostiosoite *</p>
          <input
            placeholder="diiva@diivas.fi"
            className="placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1"
            {...register('email', {
                required: 'Sähköposti tarvitaan',
                pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Väärä sähköpostiosoite'
                }
            })}
            />
            {errors.email && <p className="text-white text-sm ml-1 flex justify-end">{errors.email.message}</p>}

            <p className="ml-1 mt-3 text-white font-bold">Tapahtuman ajankohta</p>
            <input
            placeholder="Arvio riittää"
            className="placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1"
            {...register('date')}
            />

            <p className="ml-1 mt-3 text-white">Budjetti</p>
            <input
            placeholder="Arvio riittää"
            className="placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1"
            {...register('budget')}
            />

            <p className="ml-1 mt-3 text-white">Viestisi *</p>
            <textarea
            placeholder="Viesti..."
            className="placeholder:opacity-70 placeholder:text-[#CE0074] placeholder:text-sm placeholder:italic p-1"
            {...register('message', { required: 'Viesti tarvitaan' })}
            />
            {errors.message && <p className="text-white text-sm ml-1 flex justify-end">{errors.message.message}</p>}

            <div className="flex justify-center">
              <button
                className="bg-white w-35 h-10 rounded-full mt-5 cursor-pointer font-bold text-md"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                >
                    {isSubmitting ? 'Lähetetään...' : 'LÄHETÄ'}
            </button></div>
            {isSubmitSuccessful && <p className="text-white p-1">Viesti lähetetty!</p>}
        </div>
    );
}