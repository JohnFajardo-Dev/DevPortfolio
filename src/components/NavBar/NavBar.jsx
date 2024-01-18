import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="">
        <h1 className="name">JF</h1>
      </a>

      <ul className="menu">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#works">works</a>
        </li>
        <li>
          <a href="index.html">home</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
