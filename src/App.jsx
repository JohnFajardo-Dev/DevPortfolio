import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <header id="home"></header>
      <NavBar />
      <main>
        <Home />
      </main>
      <Projects />
      <About />
    </>
  );
}

export default App;
