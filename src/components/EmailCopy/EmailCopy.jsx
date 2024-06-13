import "./EmailCopy.css";
import { FaCopy } from "react-icons/fa";
import { IconContext } from "react-icons";

function EmailCopy() {
  const email = "johnfajardo177@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el correo", err);
      });
  };
  return (
    <div className="email-cont">
      <label htmlFor="email">Correo</label>
      <article className="email-copy-cont">
        <input
          className="email-txt"
          type="text"
          id="email"
          value={email}
          readOnly
        />
        <IconContext.Provider value={{ size: "1.5em" }}>
          <button className={"email-btn"} onClick={copyToClipboard}>
            <FaCopy />
          </button>
        </IconContext.Provider>
      </article>
    </div>
  );
}

export default EmailCopy;
