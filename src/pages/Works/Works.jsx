import Cards from "../../components/Cards/Cards";
import "./Works.css";
import { useTranslation } from "react-i18next";

function Works() {
  const { t } = useTranslation();
  return (
    <section className="works" id="works">
      <h2 className="title-works">{t("works_title")}</h2>
      <section className="projects">
        <Cards
          title={t("weatherapp_title")}
          description={t("weatherapp_description")}
          image="assets/works/WeatherApp.jpg"
          href="https://github.com/Fajardo-dev/WeatherApp"
          skills="HTML CSS JS"
          website="true"
          weblink="https://fajardo-dev-weatherapp.netlify.app/"
        />
        <Cards
          title={t("graffart_title")}
          description={t("graffart_description")}
          image="assets/works/GraffArt.png"
          href="https://github.com/Fajardo-dev/GraffArt"
          skills="REACT"
          website="true"
          weblink="https://graffart.netlify.app/"
        />
        <Cards
          title={t("fft_title")}
          description={t("fft_description")}
          image="assets/works/FFT.jpg"
          href="https://github.com/Fajardo-dev/FFT"
          skills="PYTHON"
        />
        <Cards
          title={t("portfoliov1_title")}
          description={t("portfolio_description")}
          image="assets/works/PortfolioV1.jpg"
          href="https://github.com/Fajardo-dev/Portfolio"
          skills="HTML CSS JS"
          website="true"
          weblink="https://fajardo-dev.netlify.app/"
        />
        <Cards
          title={t("truthescape_title")}
          description={t("truthescape_description")}
          image="assets/works/TruthEscape.gif"
          href="http://github.com/Fajardo-dev/TruthEscape-WebSite"
          skills="REACT"
          website="true"
          weblink="https://truthescape.netlify.app/"
        />
      </section>
    </section>
  );
}

export default Works;
