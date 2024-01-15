import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";

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
        </article>
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
            title='The "Fast Fourier Transform" (FFT)
              '
            description="This code analyzes the frequency content of a simple sine wave using the Fast Fourier Transform (FFT)."
            image="src/assets/picture2.jpg"
          />{" "}
          <Cards
            title="Portfolio v1 John Fajardo"
            description="Version 1 of John Fajardo's portfolio, made with html, css and javascript"
            image="src/assets/picture3.jpg"
            downstyle="true"
          />{" "}
        </section>
      </section>
    </>
  );
}

export default App;
