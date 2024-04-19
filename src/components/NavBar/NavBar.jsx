import "./NavBar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <a href="">
        <h1 className="name">JF</h1>
      </a>

      <ul className="menu">
        <li>
          <a href="#home">{t("home_nav")}</a>
        </li>
        <li>
          <a href="#works">{t("works_nav")}</a>
        </li>
        <li>
          <a href="#about">{t("about_nav")}</a>
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
