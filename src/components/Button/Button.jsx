import "./Button.css";

function Button({ title }) {
  return (
    <button className="button">
      <a href="assets/files/JOHNFAJARDO-CV.pdf">
        <p>{title}</p>
      </a>
    </button>
  );
}

export default Button;
