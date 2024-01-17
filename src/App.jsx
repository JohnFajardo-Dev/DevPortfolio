import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section className="start-home">
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
      </main>
      <section className="works" id="works">
        <h2 className="title-works">My Works</h2>
        <section className="projects">
          <Cards
            title="WeatherApp"
            description="WeatherApp is a simple application to check the weather for different cities around the world. "
            image="src/assets/picture1.jpg"
            link="https://github.com/Fajardo-dev/WeatherApp"
            downstyle="true"
          />{" "}
          <Cards
            title='The "Fast Fourier Transform" (FFT)'
            description="This code analyzes the frequency content of a simple sine wave using the Fast Fourier Transform (FFT)."
            image="src/assets/picture2.jpg"
            link="https://github.com/Fajardo-dev/FFT"
          />{" "}
          <Cards
            title="Portfolio v1 John Fajardo"
            description="Version 1 of John Fajardo's portfolio, made with html, css and javascript"
            image="src/assets/picture3.jpg"
            downstyle="true"
            link="https://github.com/Fajardo-dev/Portfolio"
          />{" "}
        </section>
      </section>
    </>
  );
}

export default App;
