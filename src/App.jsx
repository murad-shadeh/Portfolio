import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Main>
        <Header />
        <div className="main-content">
          <Hero />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </Main>

      <Routes>
        {/* <Route path="index" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default App;
