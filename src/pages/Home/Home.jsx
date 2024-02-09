import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import "./Home.css";

function Home() {
  return (
    <section className="start-home" id="home">
      <article>
        <h1 className="focustxt">Hi, Im John!</h1>
        <h2 className="txthome">
          <span className="focustxt">Programmer</span> and{" "}
          <span className="focustxt">Web Developer</span> passionate about{" "}
          <span className="focustxt">design</span>
          <br /> and <span className="focustxt">opensource</span>
        </h2>
        <Button title="Resume" />
      </article>
      <aside className="icons-side">
        <div>
          <a
            href="https://github.com/Fajardo-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/johnfajardo06/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </a>
        </div>
      </aside>
    </section>
  );
}

export default Home;
