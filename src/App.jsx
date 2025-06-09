import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  return (
    <div>
      <Main>
        <Header />
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
