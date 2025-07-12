import { Link, NavLink } from "react-router-dom";
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
              <NavLink to="/" className="links">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="links">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="links">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <a href="/Murad_Dabbous_Resume.pdf" download className="resume-button">
          Résumé
        </a>
      </div>
    </header>
  );
};

export default Header;
