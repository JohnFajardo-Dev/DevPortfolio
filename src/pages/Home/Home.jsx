// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import "./Home.css";
import Location from "../../components/Location/Location";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <section className="start-home" id="home">
      <article>
        <h1 className="focustxt">{t("greeting_home")}</h1>

        <h2 className="txthome">
          {t("aboutme_home")}
          <Location />
        </h2>
        <Button title={t("resume_btn_home")} />
      </article>
    </section>
  );
}

export default Home;
