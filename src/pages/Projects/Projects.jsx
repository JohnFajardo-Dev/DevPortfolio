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
          repolink="true"
          website="true"
          weblink="https://apptotask.netlify.app/"
          category="Frontend"
        />
        <Cards
          title={t("fshop_title")}
          description={t("fshop_description")}
          image="assets/works/FShop.png"
          skills="REACT"
          website="true"
          weblink="https://fshopfront.netlify.app/"
          category="FullStack"
        />
        <Cards
          title={t("tattooportfolio_title")}
          description={t("tattooportfolio_description")}
          image="assets/works/TattooPortfolio.png"
          skills="REACT"
          website="true"
          weblink="https://tattooportfolio.netlify.app/"
          repolink="true"
          href="https://github.com/JohnFajardo-Dev/TattooPortfolio"
          category="Frontend"
        />
      </section>
    </section>
  );
}

export default Projects;
