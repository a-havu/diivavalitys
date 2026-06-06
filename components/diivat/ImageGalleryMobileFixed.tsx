import { useEffect, useRef, type ComponentProps } from "react";
import { ImageGallery } from "react-image-grid-gallery";

type ImageGalleryProps = ComponentProps<typeof ImageGallery>;

export function ImageGalleryMobileFixed(props: ImageGalleryProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = wrapperRef.current?.querySelector("dialog");

    const observer = new MutationObserver(() => {
      const isDialogOpen = dialog?.open ?? false;
      if (!isDialogOpen) {
        document.documentElement.style.overflow = "";
      }
    });

    if (dialog) {
      observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    }

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      observer.disconnect();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ touchAction: "pan-y", width: "100%" }}>
      <ImageGallery {...props} />
    </div>
  );
}