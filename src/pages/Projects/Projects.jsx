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
          title={t("fshop_title")}
          description={t("fshop_description")}
          image="assets/works/FShop.png"
          skills="REACT"
          website="true"
          weblink="https://fjrdmerch.netlify.app/"
          category="FullStack"
        />
      </section>
    </section>
  );
}

export default Projects;
