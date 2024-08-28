import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import About from "./components/Pages/About";
import Training from "./components/Pages/Training";
import Internship from "./components/Pages/Internship";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
