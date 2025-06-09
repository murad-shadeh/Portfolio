import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <img src="logo.png" alt="Site logo" />
      <h1>
        <span id="Welcome_to_my_site">Hello, I am Murad.</span>
      </h1>
      <h2>I am a Frontend/Full-stack Engineer</h2>
    </header>
  );
};

export default Header;
