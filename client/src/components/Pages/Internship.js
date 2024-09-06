import React from "react";
import Layout from "../Layout/Layout";

const internships = [
  {
    title: "Artificial Intelligence",
    description:
      "Explore cutting-edge AI technologies to create intelligent solutions.",
    image: "AI.png",
    link: "/internships/web-development",
  },
  {
    title: "Machine Learning",
    description:
      "Develop algorithms that enable systems to learn and improve from data",
    image: "ML.jpeg",
    link: "/internships/data-science",
  },
  {
    title: "Data Science",
    description:
      "Analyze and interpret complex data to drive business decisions.",
    image: "DS.jpg",
    link: "/internships/data-science",
  },
  {
    title: "Data Analytics",
    description:
      "Uncover valuable insights from data to optimize processes and strategies.",
    image: "DA.jpg",
    link: "/internships/data-science",
  },
  {
    title: "Full Stack Development(MERN)",
    description: "Build dynamic web applications using the MERN stack.",
    image: "MERN.avif",
    link: "/internships/data-science",
  },
  {
    title: "Full Stack Development(MEAN)",
    description: "Create robust web solutions with the MEAN stack.",
    image: "MEAN.png",
    link: "/internships/data-science",
  },
  {
    title: "Generative Artificial Intelligence",
    description: "Innovate with generative AI to craft creative outputs.",
    image: "GAI.jpg",
    link: "/internships/data-science",
  },
  {
    title: "Software Testing Automation",
    description:
      "Ensure software quality through automated testing frameworks.",
    image: "Automation.jpg",
    link: "/internships/data-science",
  },
  {
    title: "Python Program",
    description:
      "Master Python to develop versatile and efficient software applications.",
    image: "python.jpg",
    link: "/internships/data-science",
  },
  {
    title: "Java Programming",
    description:
      "Leverage Java to build scalable and high-performance applications.",
    image: "java.jpg",
    link: "/internships/data-science",
  },
  // Add more internship objects here
];

const Internship = () => {
  return (
    <Layout>
      <div className="internships-page">
        <div className="internships-header">
          <h1 className="internships-title">
          Shape Your Future with Real-World Experience
          </h1>
          <p className="internships-desc">
            Discover a wide range of internship opportunities designed to help
            you gain valuable experience and kickstart your career. Explore
            various roles across industries and find the perfect fit for your
            skills and interests.
          </p>
          
          <p className="hashtag">#Kickstart Your Career with Technova Internships</p>
        </div>
         <div className="intern-container">

         <i className="fa-solid fa-chevron-right extra"></i>
         <i className="fa-solid fa-chevron-right extra"></i>
         <i className="fa-solid fa-chevron-right extra"></i>
        <h3 className="intern-title">Explore Our Internships</h3>

         <i className="fa-solid fa-chevron-right extra"></i>
         <i className="fa-solid fa-chevron-right extra"></i>
         <i className="fa-solid fa-chevron-right extra"></i>

         </div>
        <div className="internships-container">
          {internships.map((internship, index) => (
            <a key={index} href={internship.link} className="internship-card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${internship.image})` }}
              ></div>
              <div className="internship-card-content">
                <h2 className="internship-card-title">{internship.title}</h2>
                <p className="internship-card-desc">{internship.description}</p>
                <button className="intern-btn">Explore</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Internship;
