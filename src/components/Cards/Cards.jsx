import "./Cards.css";

function Cards({ title, description, image, downstyle, link }) {
  return (
    <article>
      {downstyle ? (
        <div className="card">
          <img src={image} alt="" className="img-card" />
          <h2 className="title-card">{title}</h2>
          <p className="description-card">{description}</p>
          <button
            className="button-card"
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            <p>View project</p>
          </button>
        </div>
      ) : (
        <div className="card">
          <h2 className="title-card">{title}</h2>
          <p className="description-card">{description}</p>
          <img src={image} alt="" className="img-card" />
          <button
            className="button-card"
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            <p>View project</p>
          </button>
        </div>
      )}
    </article>
  );
}
export default Cards;
