import "./About.css";
import Skill from "../../components/Skill/Skill";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="about" id="about">
        <article className="about-txt">
          <h1>{t("title_aboutme")}</h1>
          <h2>{t("description_aboutme")}</h2>
        </article>
        <article className="img-profile">
          <img src="assets/profile.jpg" alt="" />
        </article>
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
    </>
  );
}

export default About;
