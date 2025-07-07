import "./Hero.css";
import me from "../assets/me.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hello, I am <span>Murad Dabbous</span>.
          </h1>
          <h2>I am a Frontend & Full-stack Engineer</h2>
          <p>
            I build responsive, clean, and efficient web applications using
            modern tools like React, Node, and PostgreSQL.
          </p>
        </div>
        <div className="hero-image">
          <img src={me} alt="My Picture" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
