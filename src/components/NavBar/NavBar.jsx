import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="name">JF</h1>
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
