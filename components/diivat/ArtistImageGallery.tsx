"use client";
import { ImageGallery } from "react-image-grid-gallery";
import "react-image-grid-gallery/style.css";
import { urlFor } from "@/lib/urlFor";

export default function ArtistImageGallery({ photos }: { photos: any[] }) {
  const imagesArray = photos?.map((photo) => ({
    id: photo._key,
    alt: photo.alt || "",
    caption: photo.alt || "",
    src: urlFor(photo),
  })) ?? [];

  return <ImageGallery imagesData={imagesArray} />;
}