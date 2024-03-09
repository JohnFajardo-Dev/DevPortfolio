// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import "./Home.css";
import Location from "../../components/Location/Location";

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
          <Location />
        </h2>
        <Button title="Resume" />
      </article>
    </section>
  );
}

export default Home;
