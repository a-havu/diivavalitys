import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return(
        <div className="flex flex-col md:flex-row justify-center md:gap-30 ml-30 mr-30 p-5 h-full">
            <div className="flex flex-col items-center m-10">
            <h1 className="mb-5">Ota yhteyttä</h1>
        <ContactForm />
        </div>
        <div className="flex flex-col items-center mt-20 ml-10 gap-5">
            <h4 className="text-lg font-bold">Jonas Kuusisto</h4>
            <p className="italic">Toimitusjohtaja</p>
            <p>jonas@diivavalitys.fi</p>
            <p>+358 457 831 0826</p>
        </div>
        </div>
    );
}