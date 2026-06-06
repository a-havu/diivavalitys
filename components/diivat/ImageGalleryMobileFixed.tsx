import { useEffect, useRef, type ComponentProps } from "react";
import { ImageGallery } from "react-image-grid-gallery";

type ImageGalleryPropsType = ComponentProps<typeof ImageGallery>; // ← inferred from component

export function ImageGalleryMobileFixed(props: ImageGalleryPropsType) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const lightboxOpen =
        document.querySelector("[class*='lightbox']") !== null ||
        document.querySelector("[class*='modal']") !== null ||
        document.querySelector("[role='dialog']") !== null;

      if (!lightboxOpen) {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.touchAction = "";
        document.documentElement.style.overflow = "";
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const el = wrapperRef.current;
    const noop = (e: TouchEvent) => e;
    el?.addEventListener("touchstart", noop, { passive: true });
    el?.addEventListener("touchmove", noop, { passive: true });

    return () => {
      observer.disconnect();
      el?.removeEventListener("touchstart", noop);
      el?.removeEventListener("touchmove", noop);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ touchAction: "pan-y", width: "100%" }}>
      <ImageGallery {...props} />
    </div>
  );
}