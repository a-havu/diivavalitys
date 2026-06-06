import { useEffect, useRef, type ComponentProps } from "react";
import { ImageGallery } from "react-image-grid-gallery";

type ImageGalleryProps = ComponentProps<typeof ImageGallery>;

function unlockScroll() {
  document.body.style.overflow = "";
  document.body.style.overflowY = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.style.touchAction = "";
  document.documentElement.style.overflow = "";
}

export function ImageGalleryMobileFixed(props: ImageGalleryProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bodyObserver = new MutationObserver(() => {
      const isLocked = document.body.style.overflow === "hidden"
        || document.body.style.overflowY === "hidden";

      if (!isLocked) {
        unlockScroll();
      }
    });

    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      const isOverlay =
        target.tagName === "DIALOG" ||
        target.closest("[class*='overlay']") !== null ||
        target.closest("[class*='backdrop']") !== null ||
        target.closest("[class*='lightbox']") !== null;

      if (isOverlay) {
        setTimeout(unlockScroll, 100);
      }
    };

    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTimeout(unlockScroll, 100);
    };
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      bodyObserver.disconnect();
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keyup", handleKeyUp);
      unlockScroll();
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ touchAction: "pan-y", width: "100%" }}>
      <ImageGallery {...props} />
    </div>
  );
}