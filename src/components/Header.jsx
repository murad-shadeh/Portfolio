import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo1.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Site logo" />
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
        {/* <h1>
          <span id="Welcome_to_my_site">Hello, I am Murad.</span>
        </h1>
        <h2>I am a Frontend & Full-stack Engineer</h2> */}
      </div>
    </header>
  );
};

export default Header;
