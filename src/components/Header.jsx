import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Site logo" className="logo" />
        </Link>

        <nav>
          <ul>
            <li>
              <HashLink smooth to="#about" className="links">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#projects" className="links">
                Work
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact" className="links">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>

        <a
          href="/public/Murad_Dabbous_FullStack_Developer.pdf"
          download
          className="resume-button"
        >
          Résumé
        </a>
      </div>
    </header>
  );
};

export default Header;
