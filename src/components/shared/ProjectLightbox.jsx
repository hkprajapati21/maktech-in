import { useEffect } from "react";

/* eslint-disable react/prop-types */
const ProjectLightbox = ({ project, activeIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  const images = project.images || [];
  const hasMultiple = images.length > 1;
  const currentImage = images[activeIndex] || images[0];

  return (
    <div className="project-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-lightbox__dialog" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="project-lightbox__close" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="project-lightbox__media">
          {hasMultiple && (
            <button type="button" className="project-lightbox__nav project-lightbox__nav--prev" onClick={onPrev} aria-label="Previous image">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          <img src={currentImage} alt={`Project photo ${activeIndex + 1}`} />

          {hasMultiple && (
            <button type="button" className="project-lightbox__nav project-lightbox__nav--next" onClick={onNext} aria-label="Next image">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>

        {hasMultiple && (
          <div className="project-lightbox__meta">
            <p>
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectLightbox;
