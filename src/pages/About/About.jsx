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
        <Skill name="HTML 5" />
        <Skill name="CSS 3" />
        <Skill name="JAVASCRIPT" />
        <Skill name="PYTHON" />
        {/* Frameworks and Libraries */}
        <Skill name="REACT" />
        <Skill name="NPM" />
        <Skill name="NODE.JS" />
        {/* Databases */}
        <Skill name="MONGODB" />
        <Skill name="MYSQL" />
        <Skill name="POSTGRES" />
        {/* Software */}
        <Skill name="VSCODE" />
        <Skill name="VIM" />
        <Skill name="GIT" />
        <Skill name="GITHUB" />
        <Skill name="LINUX" />
        {/* Design */}
        <Skill name="ADOBE PHOTOSHOP" />
        <Skill name="ADOBE ILLUSTRATOR" />
        <Skill name="ASEPRITE" />
        <Skill name="FIGMA" />
      </section>
    </>
  );
}

export default About;
