import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return(
        <div className="flex flex-col md:flex-row justify-center md:gap-30 ml-30 mr-30 md:p-5 h-full">
            <div className="flex flex-col items-center md:m-10">
            <h1 className="mb-5">Ota yhteyttä</h1>
        <ContactForm />
        </div>
        <div className="flex flex-col items-center mt-5 mb-5 md:mt-20 md:ml-10 md:gap-5 gap-1">
            <h4 className="text-lg font-bold">Jonas Kuusisto</h4>
            <p className="italic">Toimitusjohtaja</p>
            <p>jonas@diivavalitys.fi</p>
            <p>+358 457 831 0826</p>
        </div>
        </div>
    );
}