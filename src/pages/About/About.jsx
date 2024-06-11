import "./About.css";
import Skill from "../../components/Skill/Skill";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about">
      <section className="info-aboutme">
        <h2 className="info-title">{t("description_aboutme")}</h2>
        <section className="info-aboutme-sections">
          <article>
            <h2>{t("aboutme_one_title")}</h2>
            <p>{t("aboutme_one_description")}</p>
          </article>
          <article>
            <h2>{t("aboutme_two_title")}</h2>
            <p>{t("aboutme_two_description")}</p>
          </article>
          <article>
            <h2>{t("aboutme_three_title")}</h2>
            <p>{t("aboutme_three_description")}</p>
          </article>
          <article>
            <h2>{t("aboutme_four_title")}</h2>
            <p>{t("aboutme_four_description")}</p>
          </article>
        </section>
      </section>

      <section className="skills">
        <h1></h1>
        <Skill title="PYTHON" color="yellow" />
        <Skill title="HTML 5" color="orange" />
        <Skill title="CSS 3" color="white-blue" />
        <Skill title="JAVASCRIPT" color="yellow" />
        <Skill title="REACT" color="white-blue" />
        <Skill title="NODE.JS" color="dark-green" />
        <Skill title="NPM" color="white-red" />
        <Skill title="MONGODB" color="white-green" />
        <Skill title="MYSQL" color="dark-blue" />
        <Skill title="POSTGRES" color="dark-blue" />
        <Skill title="LINUX" color="yellow" />
        <Skill title="VIM" color="dark-green" />
        <Skill title="VSCODE" color="dark-blue" />
        <Skill title="GIT" color="dark-red" />
        <Skill title="GITHUB" color="dark-blue" />
        <Skill title="ADOBE PHOTOSHOP" color="dark-blue" />
        <Skill title="ADOBE ILLUSTRATOR" color="orange" />
        <Skill title="ASEPRITE" />
        <Skill title="FIGMA" color="pink" />
      </section>
    </section>
  );
}

export default About;
