import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiGraduationCapLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const courses = [
  {
    id: 1,
    image: "/AI.png",
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is a rapidly evolving field of computer science focused on creating intelligent systems capable of performing tasks that typically require human intelligence. This course covers fundamental concepts of AI, including machine learning, natural language processing, computer vision, and robotics.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to AI",
      "Machine Learning Basics",
      "Natural Language Processing",
      "Computer Vision and Robotics",
    ],
    outcomes: [
      "Understanding of AI fundamentals",
      "Hands-on experience with machine learning",
      "Ability to apply AI techniques to real-world problems",
    ],
  },
  {
    id: 2,
    image: "/ML.jpeg",
    title: "Machine Learning",
    description:
      "Machine Learning (ML) is a subset of artificial intelligence that involves the use of algorithms and statistical models to enable computers to learn from and make predictions or decisions based on data. This course covers essential ML concepts, including supervised and unsupervised learning, regression, classification, and clustering.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to Machine Learning",
      "Supervised Learning Techniques",
      "Unsupervised Learning Techniques",
      "Model Evaluation and Tuning",
    ],
    outcomes: [
      "Understanding of core ML algorithms",
      "Ability to implement ML models",
      "Experience with real-world data sets and applications",
    ],
  },
  {
    id: 3,
    image: "/DS.jpg",
    title: "Data Science",
    description:
      "Data Science is an interdisciplinary field that utilizes statistical and computational methods to extract insights and knowledge from structured and unstructured data. This course covers data manipulation, statistical analysis, data visualization, and the application of machine learning algorithms to real-world problems.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 5,
    modules: [
      "Introduction to Data Science",
      "Data Wrangling and Cleaning",
      "Exploratory Data Analysis",
      "Machine Learning in Data Science",
    ],
    outcomes: [
      "Proficiency in data manipulation using Python",
      "Ability to conduct exploratory data analysis",
      "Experience with machine learning applications in data science",
    ],
  },
  {
    id: 4,
    image: "/DA.jpg",
    title: "Data Analytics",
    description:
      "Data Analytics focuses on examining data sets to draw conclusions and support decision-making in organizations. This course covers essential tools and techniques for analyzing data, including descriptive and inferential statistics, data visualization, and the use of Excel and SQL for data manipulation.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to Data Analytics",
      "Statistical Analysis Techniques",
      "Data Visualization Methods",
      "Data Manipulation with Excel and SQL",
    ],
    outcomes: [
      "Proficiency in data analysis tools and techniques",
      "Ability to visualize and interpret data effectively",
      "Experience in solving real-world business problems using data analytics",
    ],
  },
  {
    id: 5,
    image: "/MERN.avif",
    title: "Full Stack Development (MERN)",
    description:
      "Full Stack Development (MERN) focuses on building dynamic web applications using MongoDB, Express.js, React, and Node.js. This course covers both front-end and back-end development, teaching students how to create full-stack applications from scratch.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to MERN Stack",
      "Frontend Development with React",
      "Backend Development with Node.js and Express.js",
      "Database Management with MongoDB",
    ],
    outcomes: [
      "Ability to build full-stack applications",
      "Proficiency in using the MERN stack",
      "Experience with deploying web applications",
    ],
  },
  {
    id: 6,
    image: "/MEAN.png",
    title: "Full Stack Development (MEAN)",
    description:
      "Full Stack Development (MEAN) involves creating dynamic web applications using MongoDB, Express.js, Angular, and Node.js. This course covers front-end and back-end development, with a focus on using Angular for building responsive and scalable web applications.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to MEAN Stack",
      "Frontend Development with Angular",
      "Backend Development with Node.js and Express.js",
      "Database Management with MongoDB",
    ],
    outcomes: [
      "Ability to build full-stack applications",
      "Proficiency in using the MEAN stack",
      "Experience with deploying web applications",
    ],
  },
  {
    id: 7,
    image: "/GAI.jpg",
    title: "Generative Artificial Intelligence",
    description:
      "Generative Artificial Intelligence focuses on models that generate new data, such as text, images, and audio. This course covers the fundamentals of generative models, including Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and their applications in creating synthetic data.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to Generative Models",
      "Generative Adversarial Networks (GANs)",
      "Variational Autoencoders (VAEs)",
      "Applications of Generative AI",
    ],
    outcomes: [
      "Understanding of generative AI techniques",
      "Ability to implement GANs and VAEs",
      "Experience in creating synthetic data for various applications",
    ],
  },
  {
    id: 8,
    image: "/Automation.jpg",
    title: "Software Testing Automation",
    description:
      "Software Testing Automation involves using automated tools and frameworks to test software applications. This course covers essential automation testing concepts, tools like Selenium, and best practices for creating maintainable test suites.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to Automation Testing",
      "Test Automation Tools (Selenium)",
      "Creating and Managing Test Suites",
      "Best Practices in Test Automation",
    ],
    outcomes: [
      "Proficiency in automation testing tools",
      "Ability to design and implement automated test cases",
      "Experience in improving software quality through automated testing",
    ],
  },
  {
    id: 9,
    image: "/python.jpg",
    title: "Python Programming",
    description:
      "Python Programming is an introductory course that teaches the basics of Python, one of the most versatile and widely-used programming languages. The course covers Python syntax, data structures, functions, and basic algorithms, providing a strong foundation for further learning.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 5,
    modules: [
      "Introduction to Python",
      "Python Syntax and Data Structures",
      "Functions and Modules in Python",
      "Basic Algorithms and Problem-Solving",
    ],
    outcomes: [
      "Proficiency in Python programming",
      "Ability to write clean and efficient code",
      "Foundation for advanced topics in Python and software development",
    ],
  },
  {
    id: 10,
    image: "/java.jpg",
    title: "Java Programming",
    description:
      "Java Programming is a comprehensive course that covers the basics and advanced concepts of Java, a powerful, object-oriented programming language. The course includes topics like Java syntax, object-oriented principles, exception handling, and file I/O, making it ideal for building robust applications.",
    duration: "6 Weeks",
    certificates: 2,
    rating: 4,
    modules: [
      "Introduction to Java",
      "Object-Oriented Programming in Java",
      "Exception Handling in Java",
      "File I/O and Data Handling in Java",
    ],
    outcomes: [
      "Proficiency in Java programming",
      "Understanding of object-oriented principles",
      "Ability to build robust applications using Java",
    ],
  },

  // Add other courses here...
];

const Cards = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));
  const [auth] = useAuth();
  const navigate = useNavigate();

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleDownload = () => {
    if (auth && auth.token) {
      window.open("/Rajat_Mahajan.pdf");
    } else {
      navigate("/login"); // redirect to login if not authenticated
      toast.error("You need to be logged in to download the syllabus.");
    }
  };

  return (
    <Layout>
      <div className="detail-page">
        <h1 className="card-title">{course.title}</h1>
        <div className="card-header">
          <img
            src={course.image}
            alt={`${course.title} Course`}
            className="detail-image"
          />

          <div className="info">
            <p>Course includes</p>
            <hr />

            <div className="meta">
              <div className="meta-item">
                <div className="dynamic">
                  <CiClock2 className="clock" />
                  <span> Duration</span>
                </div>
                <span> {course.duration}</span>
              </div>
              <hr />
              <div className="meta-item">
                <div className="dynamic">
                  <PiGraduationCapLight className="card-icon" />
                  <span> Certificates</span>
                </div>
                <span> {course.certificates} </span>
              </div>
              <hr />
              <div className="meta-item">
                <div className="dynamic">
                  <MdOutlineLibraryBooks className="card-icon" />
                  <span> Lessons</span>
                </div>
                <span> {course.certificates} </span>
              </div>
              <hr />

              <div className="meta-item">
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="rating-star"
                      style={{
                        color:
                          index < Math.floor(course.rating)
                            ? "#ffc107"
                            : "#e4e5e9",
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

              <button className="download" onClick={handleDownload}>
                Download syllabus
              </button>
            </div>
          </div>
        </div>

        <div className="course-content">
          <p>{course.description}</p>

          <h2> Modules</h2>
          <ul>
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>

          <h2>Learning Outcomes</h2>
          <ul>
            {course.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Cards;
