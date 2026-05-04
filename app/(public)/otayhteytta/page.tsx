import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return(
        <div className="flex flex-col items-center m-10">
            <h1 className="mb-5">Ota yhteyttä</h1>
        <ContactForm />
        </div>
    );
}