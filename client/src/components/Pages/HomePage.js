import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/");
    toast.success("Logout Successful");
  };

  return (
    <Layout>
      <div className="full-screen-section">
        <div className="content">
          <h1 className="title">TechNova Software</h1>
          <div className="tagline-container">
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <h5 className="tagline">Navigating Beyond Limits</h5>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <p className="description">
            We specialize in delivering cutting-edge software development,
            skill-based training, and strategic consulting. Our mission is to
            empower businesses with tailored solutions that drive success in the
            digital era.
          </p>
          <div className="buttons">
            {!auth.user ? (
              <>
                <button className="btn" onClick={() => navigate("/login")}>
                  Login
                </button>
                <button className="btn" onClick={() => navigate("/register")}>
                  Register
                </button>
              </>
            ) : (
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
