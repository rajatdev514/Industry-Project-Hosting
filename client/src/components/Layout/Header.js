import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            LOGO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/"
                >
                  <i class="fa-solid fa-house"></i>
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/about"
                >
                  <i class="fa-solid fa-address-card"></i>
                  <span>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/training"
                >
                  <i class="fa-solid fa-school"></i>
                  <span>Training</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/internship"
                >
                  <i class="fa-solid fa-calendar"></i>
                  <span>Internship</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/projects"
                >
                  <i class="fas fa-project-diagram"></i>
                  <span>Projects</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  to="/career"
                >
                  <i class="fa-solid fa-business-time"></i> <span>Career</span>
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
