import Image from "next/image";
import type { ProjectImage } from "@/types/content";

export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  if (!images.length) return null;
  return (
    <div className="grid gap-5 sm:gap-6">
      {images.map((image) => (
        <figure key={image.src} className="site-card overflow-hidden rounded-[1.5rem]">
          <div className="project-media relative aspect-[16/10] sm:aspect-[16/9]">
            <Image src={image.src} alt={image.alt} fill className="object-contain object-top" sizes="(max-width: 1279px) 100vw, 900px" />
          </div>
          {image.title || image.description ? (
            <figcaption className="border-t border-[var(--border)] p-5">
              {image.title ? <p className="font-semibold text-main">{image.title}</p> : null}
              {image.description ? <p className="mt-1 text-sm leading-6 text-muted">{image.description}</p> : null}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
