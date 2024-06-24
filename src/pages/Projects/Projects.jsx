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
          title={t("weatherapp_title")}
          description={t("weatherapp_description")}
          image="assets/works/WeatherApp.jpg"
          href="https://github.com/Fajardo-dev/WeatherApp"
          skills="HTML CSS JS"
          website="true"
          weblink="https://fajardo-dev-weatherapp.netlify.app/"
          category="Frontend"
        />
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
        <Cards
          title={t("truthescape_title")}
          description={t("truthescape_description")}
          image="assets/works/TruthEscape.gif"
          href="http://github.com/Fajardo-dev/TruthEscape-WebSite"
          skills="REACT"
          website="true"
          weblink="https://truthescape.netlify.app/"
          category="Frontend"
        />
        <Cards
          title={t("fft_title")}
          description={t("fft_description")}
          image="assets/works/FFT.jpg"
          href="https://github.com/Fajardo-dev/FFT"
          skills="PYTHON"
          category="Software"
        />
      </section>
    </section>
  );
}

export default Projects;
