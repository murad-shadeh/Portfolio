import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div className="app">
      <Main>
        <Header />
        <Hero />
        <Projects />
        <Routes>
          {/* <Route path="index" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </Main>
    </div>
  );
};

export default App;
