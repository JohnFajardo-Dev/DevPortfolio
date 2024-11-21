import "./Cards.css";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";

import { FaGithubAlt, FaExternalLinkAlt } from "react-icons/fa";

function Cards(props) {
  const { t } = useTranslation();
  return (
    <article>
      <div className="card">
        <img src={props.image} alt="" className="img-card" />

        <section className="tags">
          <article className="used-skills-cont">
            <h3 className="used-skills-txt">{props.skills}</h3>
          </article>
          <article className="category-cont">
            <h3>{props.category}</h3>
          </article>
        </section>

        <h2 className="title-card">{props.title}</h2>
        <p className="description-card">{props.description}</p>
        <IconContext.Provider value={{ size: "1.25em" }}>
          <article className="btn-cont">
            {props.repolink ? (
              <button
                className="button-card"
                onClick={() => {
                  window.open(props.href, "_blank");
                }}
              >
                <p>
                  {t("view_project_btn_projects")}
                  <FaGithubAlt />
                </p>
              </button>
            ) : (
              <></>
            )}

            {props.website ? (
              <button
                className="button-card"
                onClick={() => {
                  window.open(props.weblink, "_blank");
                }}
              >
                <p>
                  {t("view_site_btn_projects")}
                  <FaExternalLinkAlt />
                </p>
              </button>
            ) : (
              <></>
            )}
          </article>
        </IconContext.Provider>
      </div>
    </article>
  );
}
export default Cards;
