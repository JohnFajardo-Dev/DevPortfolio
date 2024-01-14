import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <article>
          <h1 className="focustxt">Hi, Im John!</h1>
          <h2 className="txthome">
            <span className="focustxt">Programmer</span> and{" "}
            <span className="focustxt">Web Developer</span> passionate about{" "}
            <span className="focustxt">design</span>
            <br /> and <span className="focustxt">opensource</span>
          </h2>
          <Button />
          <aside>
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin"
              size="2em"
              color="#ff0000"
            />
          </aside>
        </article>
      </main>
      <section className="works" id="works">
        <h2>My Works</h2>
        <section className="projects">
          <Cards
            title="WeatherApp"
            description="WeatherApp is a simple application to check the weather for different cities around the world. "
            image="src/assets/picture1.jpg"
            link="https://github.com/Fajardo-dev/WeatherApp"
          />{" "}
          <Cards
            title='The "Fast Fourier Transform" (FFT)
            '
            description="This code analyzes the frequency content of a simple sine wave using the Fast Fourier Transform (FFT)."
            image="src/assets/picture2.jpg"
            downstyle="true"
          />{" "}
          <Cards
            title="Proyecto 3"
            description="jkasjdkf askdjfkaskdjfkas kjasdkfjaskj ksjaksjaks jka sjkajsk"
            image="src/assets/picture3.jpg"
          />
        </section>
      </section>
    </>
  );
}

export default App;
