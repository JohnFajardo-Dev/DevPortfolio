// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import "./Home.css";
import Location from "../../components/Location/Location";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <IconContext.Provider value={{ size: "1.5em" }}>
        <article className="social-section">
          <ul className="social-bar">
            <a
              href="https://github.com/Fajardo-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Go to github profile"
            >
              <li className="social-icons  github-icon">
                <FaGithub />
              </li>
            </a>

            <a
              href="https://www.linkedin.com/in/johnfajardo06/"
              target="_blank"
              rel="noreferrer"
              aria-label="Go to linkedin profile"
            >
              <li className="social-icons linkedin-icon">
                <FaLinkedin />
              </li>
            </a>
          </ul>
        </article>
      </IconContext.Provider>
    </section>
  );
}

export default Home;
