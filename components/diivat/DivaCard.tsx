import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";

const builder = imageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source).width(400).height(400).url()

export default function DivaCard({name, photo}: { name: string, photo: any }) {
    return (
        <div className="flex flex-col">
          <Image
            src={urlFor(photo)}
            alt={name}
            width={200}
            height={200}
          />
          <h3 className="flex justify-center p-2">{name}</h3>
        </div>
    );
}