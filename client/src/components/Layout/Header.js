import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo-container">
              <img
                src="/tech.png"
                alt="TechNova Software Logo"
                className="logo-image"
              />
              <div className="logo-text">
                <h1>TechNova Software</h1>
                <p>Navigating Beyond Limits</p>
              </div>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-solid fa-house"></i>
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/about"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-solid fa-address-card"></i>
                  <span>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/training"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-solid fa-school"></i>
                  <span>Training</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/internship"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-solid fa-calendar"></i>
                  <span>Internship</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-project-diagram"></i>
                  <span>Projects</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-solid fa-business-time"></i>{" "}
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
