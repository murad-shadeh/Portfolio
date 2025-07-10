import { Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-text">
        I'm currently open to new opportunities. If you believe I'd be a great
        fit for your team or project, feel free to reach out!
      </p>
      <a href="mailto:moradshadeh@gmail.com" target="_blank" rel="noreferrer">
        <Button variant="outline-primary" className="contact-button">
          Contact Me
        </Button>
      </a>
    </section>
  );
};

export default Contact;
