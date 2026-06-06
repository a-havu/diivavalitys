"use client";

import { ImageGalleryMobileFixed } from "./ImageGalleryMobileFixed";
import "react-image-grid-gallery/style.css";
import { urlFor } from "@/lib/urlFor";

export default function ArtistImageGallery({ photos }: { photos: any[] }) {
  const imagesArray = photos?.map((photo) => ({
    id: photo._key,
    alt: photo.alt || "",
    caption: photo.credit || "",
    src: urlFor(photo),
  })) ?? [];

  return <ImageGalleryMobileFixed imagesData={imagesArray} columnCount={3} enableDefaultLightbox />;
}