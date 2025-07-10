const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Murad Dabbous.</p>
        <p>
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          using React + Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
