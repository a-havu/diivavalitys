import DivaGallery from "@/components/diivat/DivaGallery"
import Filters from "@/components/diivat/Filters"

export default function Diivat()
{
    return(
        <>
        <h1 className="flex justify-center p-8">Diivat</h1>
        <Filters />
        <DivaGallery />
        </>
    );
}