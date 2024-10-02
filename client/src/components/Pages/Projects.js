import React from "react";
import Layout from "../Layout/Layout";
import { FaClock, FaCertificate, FaStar } from "react-icons/fa";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      title: "Artificial Intelligence",
      image: "AI.png",
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
      <div className="project-one">
        {" "}
        {/* Add ref to the parent div */}
        <div className="left">
          <div className="additional">
            <h3>Technova Projects </h3>
          </div>
          <h1 className="courses-title">INTRODUCING OUR Projects</h1>
          <p className="para-1">Find interesting projects and execute them! </p>
          <p className="para-2">#BuildProjects</p>
        </div>
        <div className="right">
          <img
            src="https://xperiencify.com/_next/static/media/guy-desk-laptop.0a61b579.svg"
            alt="training"
          />
        </div>
      </div>

      <h2 className="projectst">Explore Our Projects</h2>

      <div className="project-cards">
        {Projects.map((course) => (
          <div
            key={course.id}
            className="project-card"
            onClick={() => (window.location.href = `/project/${course.id}`)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="project-image"
            />
            <h3 className="project-title">{course.title}</h3>
            <div className="card-tint"></div>

            <div className="arrow">
              <img src="arrow.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
