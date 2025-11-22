import "./About.css";
import Skill from "../../components/Skill/Skill";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about">
      <section className="info-aboutme">
        <h1 className="info-title">{t("description_aboutme")}</h1>
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
      <section className="education-aboutme">
        <h1 className="info-title">EDUCATION</h1>
        <section className="education-aboutme-sections">
          <article className="education-item">
            <h2>{t("education_one_title")}</h2>
            <p>
              SENA<span> - </span>
              <span>Bogota, Colombia</span>
            </p>
          </article>
          <article className="education-item">
            <h2>{t("education_two_title")}</h2>
            <p>
              SENA<span> - </span>
              <span>Bogota, Colombia</span>
            </p>
          </article>
          <article className="education-item">
            <h2>{t("education_three_title")}</h2>
            <p>
              SENA<span> - </span>
              <span>Bogota, Colombia</span>
            </p>
          </article>
          <article className="education-item">
            <h2>{t("education_four_title")}</h2>
            <p>
              SENA<span> - </span>
              <span>Bogota, Colombia</span>
            </p>
          </article>
        </section>
      </section>

      <section className="skill-aboutme">
        <h1 className="info-title">SKILLS</h1>
        <section className="skills">
          <Skill title="PYTHON" color="yellow" />
          <Skill title="HTML" color="orange" />
          <Skill title="CSS" color="white-blue" />
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
    </section>
  );
}

export default About;
