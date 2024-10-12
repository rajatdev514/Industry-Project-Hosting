import React from "react";
import Layout from "../Layout/Layout";

const internships = [
  {
    id: 1,
    title: "Artificial Intelligence",
    description:
      "Explore cutting-edge AI technologies to create intelligent solutions.",
    image: "AI.png",
    link: "/internships/web-development",
  },
  {
    id: 2,
    title: "Machine Learning",
    description:
      "Develop algorithms that enable systems to learn and improve from data",
    image: "ML.jpeg",
    link: "/internships/data-science",
  },
  {
    id: 3,
    title: "Data Science",
    description:
      "Analyze and interpret complex data to drive business decisions.",
    image: "DS.jpg",
    link: "/internships/data-science",
  },
  {
    id: 4,
    title: "Data Analytics",
    description:
      "Uncover valuable insights from data to optimize processes and strategies.",
    image: "DA.jpg",
    link: "/internships/data-science",
  },
  {
    id: 5,
    title: "Full Stack Development(MERN)",
    description: "Build dynamic web applications using the MERN stack.",
    image: "MERN.avif",
    link: "/internships/data-science",
  },
  {
    id: 6,
    title: "Full Stack Development(MEAN)",
    description: "Create robust web solutions with the MEAN stack.",
    image: "MEAN.png",
    link: "/internships/data-science",
  },
  {
    id: 7,
    title: "Generative Artificial Intelligence",
    description: "Innovate with generative AI to craft creative outputs.",
    image: "GAI.jpg",
    link: "/internships/data-science",
  },
  {
    id: 8,
    title: "Software Testing Automation",
    description:
      "Ensure software quality through automated testing frameworks.",
    image: "Automation.jpg",
    link: "/internships/data-science",
  },
  {
    id: 9,
    title: "Python Program",
    description:
      "Master Python to develop versatile and efficient software applications.",
    image: "python.jpg",
    link: "/internships/data-science",
  },
  {
    id: 10,
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
          <p className="hashtag">
            #Kickstart Your Career with Technova Internships
          </p>
        </div>

        <div className="intern-container">
          <h3 className="intern-title">Explore Our Internships</h3>
        </div>

        <div className="internships-container">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="internship-card"
              onClick={() =>
                (window.location.href = `/internship/${internship.id}`)
              }
            >
              <div
                className="card-image"
                style={{ backgroundImage: `url(${internship.image})` }}
              ></div>
              <div className="internship-card-content">
                <h2 className="internship-card-title">{internship.title}</h2>
                <p className="internship-card-desc">{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Internship;
