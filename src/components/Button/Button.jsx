import "./Button.css";

function Button({ title }) {
  return (
    <button className="button">
      <a href="assets/files/John-Fajardo-CV.pdf">
        <p>{title}</p>
      </a>
    </button>
  );
}

export default Button;
