import React, { useEffect, useState, useRef } from "react";
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

  // Counter section logic
  const [counts, setCounts] = useState({
    courses: 0,
    internships: 0,
    happyStudents: 0,
    liveProjects: 0,
  });

  const targetCounts = {
    courses: 10,
    internships: 12,
    happyStudents: 300,
    liveProjects: 15,
  };

  const counterSectionRef = useRef(null);

  useEffect(() => {
    const startCounting = () => {
      const incrementSpeed = 80;
      let interval;

      interval = setInterval(() => {
        setCounts((prevCounts) => {
          let newCounts = { ...prevCounts };

          if (newCounts.courses < targetCounts.courses) {
            newCounts.courses++;
          }
          if (newCounts.internships < targetCounts.internships) {
            newCounts.internships++;
          }
          if (newCounts.happyStudents < targetCounts.happyStudents) {
            newCounts.happyStudents += 10;
          }
          if (newCounts.liveProjects < targetCounts.liveProjects) {
            newCounts.liveProjects++;
          }

          if (
            newCounts.courses === targetCounts.courses &&
            newCounts.internships === targetCounts.internships &&
            newCounts.happyStudents >= targetCounts.happyStudents &&
            newCounts.liveProjects === targetCounts.liveProjects
          ) {
            clearInterval(interval);
          }

          return newCounts;
        });
      }, incrementSpeed);
    };

    const resetCounts = () => {
      setCounts({
        courses: 0,
        internships: 0,
        happyStudents: 0,
        liveProjects: 0,
      });
    };

    // Use IntersectionObserver to trigger animation when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          } else {
            resetCounts(); // Reset the counts when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

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
                <button
                  className="home-login-btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="home-register-btn"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            ) : (
              <button className="home-logout-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div
        id="counter-section"
        className="counter-section"
        ref={counterSectionRef}
      >
        <div className="counter">
          <h3>{counts.courses}+</h3>
          <p>No of Courses</p>
        </div>
        <div className="counter">
          <h3>{counts.internships}+</h3>
          <p>No of Internships</p>
        </div>
        <div className="counter">
          <h3>{counts.happyStudents}+</h3>
          <p>No of Happy Students</p>
        </div>
        <div className="counter">
          <h3>{counts.liveProjects}+</h3>
          <p>No of Live Projects</p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
