import "./Cards.css";

function Cards({ title, description, image, href, tag }) {
  return (
    <article>
      <div className="card">
        <img src={image} alt="" className="img-card" />

        <article className="used-skills-cont">
          <h3 className="used-skills-txt">{tag}</h3>
        </article>

        <h2 className="title-card">{title}</h2>
        <p className="description-card">{description}</p>
        <button
          className="button-card"
          onClick={() => {
            window.open(href, "_blank");
          }}
        >
          <p>View project</p>
        </button>
      </div>
    </article>
  );
}
export default Cards;
