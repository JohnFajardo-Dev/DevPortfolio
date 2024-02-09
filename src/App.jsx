import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faAndroid,
  faNpm,
  faNode,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <NavBar />
      <main>
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
      </main>
      <section className="works" id="works">
        <h2 className="title-works">My Works</h2>
        <section className="projects">
          <Cards
            title="WeatherApp"
            description="WeatherApp is a simple application to check the weather for different cities around the world. "
            image="assets/picture1.jpg"
            link="https://github.com/Fajardo-dev/WeatherApp"
            downstyle="true"
          />{" "}
          <Cards
            title='The "Fast Fourier Transform" (FFT)'
            description="This code analyzes the frequency content of a simple sine wave using the Fast Fourier Transform (FFT)."
            image="assets/picture2.jpg"
            link="https://github.com/Fajardo-dev/FFT"
          />{" "}
          <Cards
            title="VideoGame"
            description="In development"
            image="assets/game.gif"
            downstyle="false"
            link="#"
            indev="true"
          />
          <Cards
            title="Portfolio v1 John Fajardo"
            description="Version 1 of John Fajardo's portfolio, made with html, css and javascript"
            image="assets/picture3.jpg"
            downstyle="true"
            link="https://github.com/Fajardo-dev/Portfolio"
          />{" "}
        </section>
      </section>

      <section className="about" id="about">
        <article className="about-txt">
          <h1>About me</h1>
          <h2>
            <span className="focustxt">Programmer</span> and{" "}
            <span className="focustxt">Web Developer</span> passionate about
            UI/UX design and <span className="focustxt">open source</span>{" "}
            development with more than{" "}
            <span className="focustxt">4 years of experience</span> in the world
            of development and technology.
          </h2>
        </article>
        <article className="img-profile">
          <img src="assets/profile.jpg" alt="" />
        </article>
      </section>

      <section className="skill-slider">
        <article className="skills">
          <span className="skill">
            <FontAwesomeIcon icon={faHtml5} size="5x" />
            <p>HTML</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size="5x" />
            <p>CSS</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faJs} size="5x" />
            <p>JavaScript</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faReact} size="5x" />
            <p>React</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faPython} size="5x" />
            <p>Python</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faAndroid} size="5x" />
            <p>Android</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faNpm} size="5x" />
            <p>NPM</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faNode} size="5x" />
            <p>Node</p>
          </span>
          <span className="skill">
            <FontAwesomeIcon icon={faLinux} size="5x" />
            <p>Linux</p>
          </span>
        </article>
      </section>
    </>
  );
}

export default App;
