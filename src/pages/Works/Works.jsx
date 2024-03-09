import Cards from "../../components/Cards/Cards";
import "./Works.css";
function Works() {
  return (
    <section className="works" id="works">
      <h2 className="title-works">My Works</h2>
      <section className="projects">
        <Cards
          title="WeatherApp"
          description="WeatherApp is a simple application to check the weather for different cities around the world. "
          image="assets/works/WeatherApp.jpg"
          href="https://github.com/Fajardo-dev/WeatherApp"
          tag="HTML CSS JS"
        />
        <Cards
          title="Portfolio v1 John Fajardo"
          description="Version 1 of John Fajardo's portfolio, made with html, css and javascript"
          image="assets/works/PortfolioV1.jpg"
          href="https://github.com/Fajardo-dev/Portfolio"
          tag="HTML CSS JS"
        />
        <Cards
          title='The "Fast Fourier Transform" (FFT)'
          description="This code analyzes the frequency content of a simple sine wave using the Fast Fourier Transform (FFT)."
          image="assets/works/FFT.jpg"
          href="https://github.com/Fajardo-dev/FFT"
          tag="PYTHON"
        />
        <Cards
          title="GraffArt"
          description="Graffiti art gallery, with an urban style"
          image="assets/works/GraffArt.png"
          href="https://github.com/Fajardo-dev/GraffArt"
          tag="HTML CSS JS REACT"
        />
      </section>
    </section>
  );
}

export default Works;
