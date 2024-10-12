import React from "react";
import { FaClock, FaCertificate, FaStar } from "react-icons/fa";
import Layout from "../Layout/Layout";

const Training = () => {
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
      <div className="training-one">
        {" "}
        {/* Add ref to the parent div */}
        <div className="left">
          <h1 className="courses-title">INTRODUCING OUR COURSES</h1>
          <p className="para-1">Find interesting courses and get started </p>
          <p className="para-2">#UpgradeYourKnowledge</p>
          <div className="tag">Give it a try!</div>
        </div>
        <div className="right-training">
          <img src="/training-img.png" alt="training" />
        </div>
      </div>

      <h3 className="category-tag">Explore Our Categories</h3>

      <div className="course-cards-container">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => (window.location.href = `/course/${course.id}`)}
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
    </Layout>
  );
};

export default Training;
