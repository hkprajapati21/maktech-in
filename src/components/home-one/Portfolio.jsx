import { homeProjects } from "@/assets/data/projects";
import ProjectLightbox from "@/components/shared/ProjectLightbox";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openProject = (project) => {
    if (!project.images || project.images.length <= 1) return;
    setActiveProject(project);
    setActiveIndex(0);
  };

  const closeLightbox = useCallback(() => {
    setActiveProject(null);
    setActiveIndex(0);
  }, []);

  const showPrev = useCallback(() => {
    if (!activeProject) return;
    setActiveIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
  }, [activeProject]);

  const showNext = useCallback(() => {
    if (!activeProject) return;
    setActiveIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
  }, [activeProject]);

  return (
    <section className="srex-portfolio srex-section">
      <div className="container-fluid">
        <div className="srex-portfolio__title">
          <div className="srex-section__head ">
            <h5 data-aos="fade-up" className="srex-section__head__badge">
              <img src="/images/badge-icon.svg" alt="Badge Icon" />
              our projects
            </h5>
            <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title">
              Embrace the power of the sun with solar energy!
            </h2>
          </div>
        </div>
        <div className="row" id="srex-ho-filter">
          {homeProjects.map((item) => {
            const cover = item.images[0];
            const hasGallery = item.images.length > 1;
            return (
              <div key={item.id} className="col-md-6 col-lg-4 col-12">
                <div
                  className={`srex-portfolio__item${hasGallery ? " srex-portfolio__item--gallery" : ""}`}
                  onClick={() => openProject(item)}
                  role={hasGallery ? "button" : undefined}
                  tabIndex={hasGallery ? 0 : undefined}
                  onKeyDown={(event) => {
                    if (hasGallery && (event.key === "Enter" || event.key === " ")) openProject(item);
                  }}
                >
                  <img src={cover} alt="Solar project" />
                  {hasGallery && <span className="srex-portfolio__item__badge">{item.images.length} Photos</span>}
                </div>
              </div>
            );
          })}
        </div>
        <div className="srex-portfolio__cta" data-aos="fade-up">
          <Link to="/projects" className="srex-btn srex-btn--primary">
            View More Projects <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {activeProject && (
        <ProjectLightbox project={activeProject} activeIndex={activeIndex} onClose={closeLightbox} onPrev={showPrev} onNext={showNext} />
      )}
    </section>
  );
};

export default Portfolio;
