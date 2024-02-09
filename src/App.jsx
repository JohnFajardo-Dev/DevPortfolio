import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SkillsContainer from "./components/Skill/Skill";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
      </main>
      <Works />
      <About />
      <SkillsContainer />
    </>
  );
}

export default App;
