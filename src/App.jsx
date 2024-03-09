import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <header id="home"></header>
      <NavBar />
      <main>
        <Home />
      </main>
      <Works />
      <About />
    </>
  );
}

export default App;
