import "./Cards.css";

function Cards({ title, description, image, downstyle, link }) {
  return (
    <article>
      {downstyle ? (
        <article>
          <img src={image} alt="" className="img-card" />
          <h2 className="title-card">{title}</h2>
          <p className="description-card">{description}</p>
          <button className="button-card">
            <p>View project</p>
          </button>
        </article>
      ) : (
        <article>
          <h2 className="title-card">{title}</h2>
          <p className="description-card">{description}</p>
          <img src={image} alt="" className="img-card" />
          <button className="button-card">
            <p>View project</p>
          </button>
        </article>
      )}
    </article>
  );
}
export default Cards;
