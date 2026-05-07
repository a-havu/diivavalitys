'use client'
import { useForm } from 'react-hook-form'

type FormData = {
    name: string
    email: string
    message: string
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
        <div className="flex flex-col w-100 bg-[#CE0074] p-4 rounded-lg">
            <p>Nimesi *</p><input
            placeholder="Homo Minogue"
            className="placeholder:text-[#CE0074] placeholder:text-sm p-1"
            {...register('name', { required: 'Nimi tarvitaan' })}
            />
            {errors.name && <p className="text-white text-xs ml-1">{errors.name.message}</p>}

          <input
            placeholder="Sähköposti"
            className="placeholder:text-[#CE0074] placeholder:text-sm p-1"
            {...register('email', {
                required: 'Sähköposti tarvitaan',
                pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Väärä sähköpostiosoite'
                }
            })}
            />

            <input
            placeholder="Tapahtuman ajankohta"
            className="placeholder:text-[#CE0074] placeholder:text-sm p-1"
            {...register('name', { required: 'Nimi tarvitaan' })}
            />
            {errors.name && <p className="text-white text-xs ml-1">{errors.name.message}</p>}

            <p>Budjetti</p><input
            placeholder="jos tiedossa/arvio riittää"
            className="placeholder:text-[#CE0074] placeholder:text-sm p-1"
            {...register('name', { required: 'Nimi tarvitaan' })}
            />
            {errors.name && <p className="text-white text-xs ml-1">{errors.name.message}</p>}


            {errors.email && <p className="text-white text-xs ml-1">{errors.email.message}</p>}

            <textarea
            placeholder="Viesti"
            className="placeholder:text-[#CE0074] placeholder:text-sm p-1"
            {...register('message', { required: 'Viesti tarvitaan' })}
            />
            {errors.message && <p className="text-white text-xs ml-1">{errors.message.message}</p>}

            <button
                className="bg-white w-35 h-10 rounded-lg mt-5 hover:cursor-pointer"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                >
                    {isSubmitting ? 'Lähetetään...' : 'Lähetä'}
            </button>
            {isSubmitSuccessful && <p className="text-white p-1">Viesti lähetetty!</p>}
        </div>
    );
}