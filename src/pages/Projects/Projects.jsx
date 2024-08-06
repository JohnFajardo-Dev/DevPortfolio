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
          title={t("taskapp_title")}
          description={t("taskapp_description")}
          image="assets/works/TaskApp.png"
          href="https://github.com/Fajardo-dev/TaskApp"
          skills="REACT"
          website="true"
          weblink="https://apptotask.netlify.app/"
          category="Frontend"
        />
      </section>
    </section>
  );
}

export default Projects;
