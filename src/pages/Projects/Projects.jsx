import Cards from "../../components/Cards/Cards";
import "./Projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <section className="projects" id="projects">
      <h2 className="title-projects">{t("projects_title")}</h2>
      <section className="projects-cont">
        <Cards
          title={t("graffart_title")}
          description={t("graffart_description")}
          image="assets/works/GraffArt.png"
          href="https://github.com/Fajardo-dev/GraffArt"
          skills="REACT"
          website="true"
          weblink="https://graffart.netlify.app/"
          category="Frontend"
        />
      </section>
    </section>
  );
}

export default Projects;
