import "./Cards.css";
import { useTranslation } from "react-i18next";

function Cards({ title, description, image, href, skills, website, weblink }) {
  const { t } = useTranslation();
  return (
    <article>
      <div className="card">
        <img src={image} alt="" className="img-card" />

        <article className="used-skills-cont">
          <h3 className="used-skills-txt">{skills}</h3>
        </article>

        <h2 className="title-card">{title}</h2>
        <p className="description-card">{description}</p>
        <article className="btn-cont">
          <button
            className="button-card"
            onClick={() => {
              window.open(href, "_blank");
            }}
          >
            <p>{t("view_project_btn_projects")}</p>
          </button>

          {website ? (
            <button
              className="button-card"
              onClick={() => {
                window.open(weblink, "_blank");
              }}
            >
              <p>{t("view_site_btn_projects")}</p>
            </button>
          ) : (
            <></>
          )}
        </article>
      </div>
    </article>
  );
}
export default Cards;
