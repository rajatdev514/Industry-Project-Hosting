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
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "./components/Pages/Cards";
import Dashboard from "./components/Pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./components/Pages/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./components/Pages/admin/AdminDashboard";
import Projectcard from "./components/Pages/Projectcard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course/:id" element={<Cards />} />
        <Route path="/project/:id" element={<Projectcard />} />
      </Routes>
    </>
  );
}

export default App;
