import ProjectList from "@/components/projects/ProjectList";
import SectionTop from "@/components/shared/SectionTop";

const Projects = () => {
  return (
    <>
      <SectionTop title="Projects" bgImage="/images/projects/projects-banner.jpg" />
      <ProjectList />
    </>
  );
};

export default Projects;
