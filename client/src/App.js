import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import About from "./components/Pages/About";
import Training from "./components/Pages/Training";
import Internship from "./components/Pages/Internship";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
