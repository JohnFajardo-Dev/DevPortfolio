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
        {/* Programming Languages */}
        <Skill title="HTML 5" />
        <Skill title="CSS 3" />
        <Skill title="JAVASCRIPT" />
        <Skill title="PYTHON" />
        {/* Frameworks and Libraries */}
        <Skill title="REACT" />
        <Skill title="NPM" />
        <Skill title="NODE.JS" />
        {/* Databases */}
        <Skill title="MONGODB" />
        <Skill title="MYSQL" />
        <Skill title="POSTGRES" />
        {/* Software */}
        <Skill title="VSCODE" />
        <Skill title="VIM" />
        <Skill title="GIT" />
        <Skill title="GITHUB" />
        <Skill title="LINUX" />
        {/* Design */}
        <Skill title="ADOBE PHOTOSHOP" />
        <Skill title="ADOBE ILLUSTRATOR" />
        <Skill title="ASEPRITE" />
        <Skill title="FIGMA" />
      </section>
    </section>
  );
}

export default About;
