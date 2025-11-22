import "./NavBar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { GrProjects } from "react-icons/gr";
import { GrHome } from "react-icons/gr";
import { MdOutlineContactMail } from "react-icons/md";
import { IconContext } from "react-icons";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <a href="">
        <h1 className="name">FJRD</h1>
      </a>

      <ul className="menu">
        <IconContext.Provider value={{ size: "1.5em" }}>
          <li>
            <a href="#home" className="txt-navbar">
              {t("home_nav")}
            </a>
            <span className="icon-navbar">
              <a href="#">
                <GrHome />
              </a>
            </span>
          </li>
          <li>
            <a href="#projects" className="txt-navbar">
              {t("works_nav")}
            </a>
            <span className="icon-navbar">
              <a href="#projects">
                <GrProjects />
              </a>
            </span>
          </li>
          <li>
            <a href="#about" className="txt-navbar">
              {t("about_nav")}
            </a>
            <span className="icon-navbar">
              <a href="#about">
                <MdOutlineContactMail />
              </a>
            </span>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </IconContext.Provider>
      </ul>
    </nav>
  );
}

export default NavBar;
