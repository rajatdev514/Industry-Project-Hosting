import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

const Projectcard = () => {
  const projectData = [
    {
      id: 1,
      title: "Artificial Intelligence",
      projects: [
        {
          title: "AI Chatbot",
          description:
            "Develop a conversational AI chatbot using NLP techniques.",
          author: "Alice Johnson",
          prerequisite: "Basic Python programming",
          skills_to_be_learned: [
            "Natural Language Processing",
            "Machine Learning",
            "APIs",
          ],
        },
        {
          title: "Image Classification",
          description:
            "Create a model that classifies images into different categories using CNN.",
          author: "Bob Smith",
          prerequisite: "Understanding of neural networks",
          skills_to_be_learned: [
            "Deep Learning",
            "Convolutional Neural Networks",
            "TensorFlow",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Machine Learning",
      projects: [
        {
          title: "House Price Prediction",
          description:
            "Build a model to predict house prices based on various features.",
          author: "Carol White",
          prerequisite: "Basic statistics and Python",
          skills_to_be_learned: [
            "Regression Analysis",
            "Feature Engineering",
            "Scikit-learn",
          ],
        },
        {
          title: "Customer Segmentation",
          description:
            "Use clustering techniques to segment customers based on behavior.",
          author: "David Brown",
          prerequisite: "Familiarity with data analysis",
          skills_to_be_learned: ["Clustering", "K-means", "Data Visualization"],
        },
      ],
    },
    {
      id: 3,
      title: "Data Science",
      projects: [
        {
          title: "Sales Forecasting",
          description:
            "Analyze historical sales data to forecast future sales trends.",
          author: "Eva Green",
          prerequisite: "Basic knowledge of time series analysis",
          skills_to_be_learned: ["Time Series Analysis", "Python", "Pandas"],
        },
        {
          title: "Data Cleaning and Visualization",
          description:
            "Clean a messy dataset and create insightful visualizations.",
          author: "Frank Black",
          prerequisite: "Basic understanding of data manipulation",
          skills_to_be_learned: [
            "Data Cleaning",
            "Data Visualization",
            "Matplotlib",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Data Analytics",
      projects: [
        {
          title: "Web Traffic Analysis",
          description: "Analyze web traffic data to understand user behavior.",
          author: "Grace Lee",
          prerequisite: "Basic statistics",
          skills_to_be_learned: ["Data Analysis", "Google Analytics", "Excel"],
        },
        {
          title: "Sales Dashboard",
          description:
            "Create an interactive dashboard to visualize sales performance.",
          author: "Henry Adams",
          prerequisite: "Basic knowledge of dashboard tools",
          skills_to_be_learned: [
            "Dashboard Design",
            "Data Visualization",
            "Tableau",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Fullstack MERN",
      projects: [
        {
          title: "E-commerce Website",
          description:
            "Develop a full-stack e-commerce application using MERN.",
          author: "Isabella Taylor",
          prerequisite: "Basic web development knowledge",
          skills_to_be_learned: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
          ],
        },
        {
          title: "Social Media App",
          description:
            "Create a social media application with user authentication and posts.",
          author: "Jack Wilson",
          prerequisite: "Familiarity with REST APIs",
          skills_to_be_learned: [
            "User Authentication",
            "CRUD Operations",
            "React Router",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Fullstack MEAN",
      projects: [
        {
          title: "Task Management App",
          description: "Build a task management application using MEAN stack.",
          author: "Karen Miller",
          prerequisite: "Basic understanding of Angular",
          skills_to_be_learned: ["Angular", "Express.js", "Node.js", "MongoDB"],
        },
        {
          title: "Blog Platform",
          description:
            "Create a blogging platform where users can create and share posts.",
          author: "Liam Thomas",
          prerequisite: "Knowledge of RESTful services",
          skills_to_be_learned: [
            "Fullstack Development",
            "MongoDB",
            "Angular Forms",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Generative Artificial Intelligence",
      projects: [
        {
          title: "Text Generation Tool",
          description:
            "Develop a tool that generates text based on user input using GPT.",
          author: "Mia Johnson",
          prerequisite: "Basic understanding of language models",
          skills_to_be_learned: [
            "Generative Models",
            "Natural Language Processing",
            "Python",
          ],
        },
        {
          title: "Art Generation App",
          description:
            "Create an application that generates unique artworks using AI algorithms.",
          author: "Noah Lee",
          prerequisite: "Familiarity with neural networks",
          skills_to_be_learned: [
            "Generative Adversarial Networks",
            "Art Creation",
            "Python",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Software Testing Automation",
      projects: [
        {
          title: "Automated Test Suite",
          description: "Develop an automated test suite for a web application.",
          author: "Olivia Brown",
          prerequisite: "Basic knowledge of testing frameworks",
          skills_to_be_learned: ["Selenium", "JUnit", "TestNG"],
        },
        {
          title: "API Testing Tool",
          description: "Create a tool to automate the testing of APIs.",
          author: "Peter Green",
          prerequisite: "Familiarity with REST APIs",
          skills_to_be_learned: [
            "Postman",
            "API Testing",
            "Automation Scripting",
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Python Programming",
      projects: [
        {
          title: "Web Scraping Application",
          description:
            "Build a web scraping tool to extract data from websites.",
          author: "Quinn Adams",
          prerequisite: "Basic Python knowledge",
          skills_to_be_learned: ["Web Scraping", "Beautiful Soup", "Requests"],
        },
        {
          title: "Data Analysis with Pandas",
          description: "Analyze datasets using the Pandas library.",
          author: "Rita Patel",
          prerequisite: "Basic understanding of data manipulation",
          skills_to_be_learned: [
            "Data Analysis",
            "Pandas",
            "Data Visualization",
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Java Programming",
      projects: [
        {
          title: "Library Management System",
          description:
            "Create a library management system to manage books and users.",
          author: "Sam Nelson",
          prerequisite: "Basic Java knowledge",
          skills_to_be_learned: [
            "Object-Oriented Programming",
            "JavaFX",
            "Database Connectivity",
          ],
        },
        {
          title: "Online Quiz Application",
          description:
            "Develop an online quiz application with user authentication.",
          author: "Tina Robinson",
          prerequisite: "Understanding of Java Servlets",
          skills_to_be_learned: ["Java Servlets", "JSP", "Web Development"],
        },
      ],
    },
  ];

  const { id } = useParams();
  const courseId = parseInt(id, 10);

  // Find the selected course based on the id from the URL
  const selectedCourse = projectData.find((course) => course.id === courseId);

  return (
    <Layout>
      <div className="project-one-card">
        {" "}
        {/* Add ref to the parent div */}
        <div className="left-card">
          <div className="additional-card">
            <h3>Technova Projects </h3>
          </div>
          <h1 className="courses-title-card">{selectedCourse.title}</h1>
          <p className="para-1-card">
            Find interesting projects and execute them!{" "}
          </p>
          <p className="para-2-card">#BuildProjects</p>
        </div>
      </div>

      <div className="actual-projects">
        {selectedCourse ? (
          selectedCourse.projects.map((project, index) => (
            <div key={index} className="projects-card">
              <h2>{project.title}</h2>
              <p> {project.description}</p>
              <div className="author-name">
                <p className="author">Author</p>
                <p>{project.author}</p>
              </div>

              <div className="author-name">
                <p className="author">Prerequisite</p>
                <p>{project.prerequisite}</p>
              </div>

              <div className="author-name">
                <p className="author">Skills to be Learned</p>
                <div className="skills">
                  {project.skills_to_be_learned.map((skill, index) => (
                    <span key={index} className="skill-box">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projects-button-container">
                <button className="view-btn">View Project</button>
                <button className="download-project">Download Project</button>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found for this course.</p>
        )}
      </div>
    </Layout>
  );
};

export default Projectcard;
