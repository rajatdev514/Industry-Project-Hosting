import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { FaClock, FaCertificate, FaStar } from "react-icons/fa";
import Testimonial from "./Testimonial";

const HomePage = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      image: "AI.png",
      title: "Artificial Intelligence",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 4,
    },
    {
      id: 2,
      image: "ML.jpeg",
      title: "Machine Learning",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 3,
    },
    {
      id: 3,
      image: "DS.jpg",
      title: "Data Science",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 4,
    },
    {
      id: 4,
      image: "DA.jpg",
      title: "Data Analytics",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 3,
    },
    {
      id: 5,
      image: "MERN.avif",
      title: "Full Stack Development(MERN)",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 3,
    },
    {
      id: 6,
      image: "MEAN.png",
      title: "Full Stack Development(MEAN)",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 4,
    },
    {
      id: 7,
      image: "GAI.jpg",
      title: "Generative Artificial Intelligence",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 3,
    },
    {
      id: 8,
      image: "Automation.jpg",
      title: "Software Testing Automation",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 4,
    },
    {
      id: 9,
      image: "python.jpg",
      title: "Python Programming",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 5,
    },
    {
      id: 10,
      image: "java.jpg",
      title: "Java Programming",
      description: "Short description of Course 1",
      duration: "6 Weeks",
      certificates: 2,
      rating: 2,
    },

    // Add more course objects...
  ];

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
            <button className="btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
      </div>

      <div>
        {" "}
        {/* Add ref to the parent div */}
        <h1 className="courses-title">Check Out The Courses!!</h1>
      </div>

      <div className="course-cards-container">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-info">
              <div className="course-detail">
                <FaClock className="icon" />
                <span>{course.duration}</span>
              </div>
              <div className="course-detail">
                <FaCertificate className="icon" />
                <span>{course.certificates} Certificates</span>
              </div>
            </div>
            <div className="course-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="course-rating-star"
                  style={{
                    color:
                      index < Math.floor(course.rating) ? "#ffc107" : "#e4e5e9",
                    background:
                      index === Math.floor(course.rating) &&
                      course.rating % 1 !== 0
                        ? "linear-gradient(90deg, #ffc107 50%, #e4e5e9 50%)"
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Testimonial />
    </Layout>
  );
};

export default HomePage;
