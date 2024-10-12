import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate instead of Navigate
import Layout from "../Layout/Layout";
import toast from "react-hot-toast";

const internshipData = [
  {
    id: 1,
    title: "Artificial Intelligence",
    internships: [
      {
        title: "AI Research",
        description: "Work on cutting-edge AI research and development.",
        company: "John Doe",
        skills: ["Machine Learning", "NLP", "Computer Vision"],
        location: "Remote",
        startDate: "1st Nov 2024",
        duration: "6 months",
        stipend: "$500/month",
        mode: "Work from home",
      },
      {
        title: "AI Engineering",
        description: "Develop AI models for various industry applications.",
        company: "Jane Doe",
        skills: ["Deep Learning", "Python", "TensorFlow"],
        location: "New York",
        startDate: "15th Nov 2024",
        duration: "4 months",
        stipend: "$800/month",
        mode: "Hybrid",
      },
    ],
  },
  {
    id: 2,
    title: "Machine Learning",
    internships: [
      {
        title: "Supervised Learning",
        description: "Create machine learning models for predictive analytics.",
        company: "James Smith",
        skills: ["Regression", "Python", "Scikit-Learn"],
        location: "San Francisco",
        startDate: "1st Dec 2024",
        duration: "3 months",
        stipend: "$1000/month",
        mode: "Offline",
      },
      {
        title: "Unsupervised Learning",
        description: "Work on unsupervised algorithms like clustering.",
        company: "Emma Brown",
        skills: ["Clustering", "Dimensionality Reduction", "R"],
        location: "London",
        startDate: "20th Nov 2024",
        duration: "5 months",
        stipend: "$700/month",
        mode: "Hybrid",
      },
    ],
  },
  {
    id: 3,
    title: "Data Science",
    internships: [
      {
        title: "Data Mining",
        description: "Extract valuable insights from complex datasets.",
        company: "Robert Black",
        skills: ["SQL", "Pandas", "Data Cleaning"],
        location: "Remote",
        startDate: "5th Nov 2024",
        duration: "4 months",
        stipend: "$600/month",
        mode: "Work from home",
      },
      {
        title: "Predictive Analytics",
        description: "Analyze historical data to predict future trends.",
        company: "Olivia White",
        skills: ["Statistical Analysis", "Tableau", "R"],
        location: "Paris",
        startDate: "10th Dec 2024",
        duration: "6 months",
        stipend: "$900/month",
        mode: "Hybrid",
      },
    ],
  },
  {
    id: 4,
    title: "Data Analytics",
    internships: [
      {
        title: "Business Intelligence",
        description: "Use data to drive business decisions.",
        company: "Sophia Green",
        skills: ["Power BI", "SQL", "Excel"],
        location: "Toronto",
        startDate: "1st Jan 2025",
        duration: "6 months",
        stipend: "$1000/month",
        mode: "Work from home",
      },
      {
        title: "Web Analytics",
        description: "Analyze web traffic and user behavior.",
        company: "Liam Brown",
        skills: ["Google Analytics", "SEO", "JavaScript"],
        location: "Berlin",
        startDate: "25th Dec 2024",
        duration: "5 months",
        stipend: "$750/month",
        mode: "Offline",
      },
    ],
  },
  {
    id: 5,
    title: "Fullstack MERN",
    internships: [
      {
        title: "Frontend Development",
        description: "Build responsive web interfaces with React.",
        company: "Lucas Grey",
        skills: ["React", "HTML", "CSS"],
        location: "Sydney",
        startDate: "5th Jan 2025",
        duration: "3 months",
        stipend: "$1200/month",
        mode: "Hybrid",
      },
      {
        title: "Backend Development",
        description: "Develop robust APIs using Node.js and Express.",
        company: "Mia Rose",
        skills: ["Node.js", "Express", "MongoDB"],
        location: "Remote",
        startDate: "15th Jan 2025",
        duration: "4 months",
        stipend: "$1000/month",
        mode: "Work from home",
      },
    ],
  },
  {
    id: 6,
    title: "Fullstack MEAN",
    internships: [
      {
        title: "Angular Development",
        description: "Create dynamic web apps with Angular.",
        company: "Ethan Lee",
        skills: ["Angular", "TypeScript", "HTML"],
        location: "Dubai",
        startDate: "10th Jan 2025",
        duration: "6 months",
        stipend: "$1500/month",
        mode: "Offline",
      },
      {
        title: "Database Design",
        description: "Work on database structures with MongoDB.",
        company: "Charlotte Brown",
        skills: ["MongoDB", "NoSQL", "Mongoose"],
        location: "Remote",
        startDate: "20th Jan 2025",
        duration: "4 months",
        stipend: "$1100/month",
        mode: "Work from home",
      },
    ],
  },
  {
    id: 7,
    title: "Generative Artificial Intelligence",
    internships: [
      {
        title: "Generative Models",
        description: "Develop AI models for content generation.",
        company: "Elijah Wilson",
        skills: ["GANs", "Deep Learning", "Python"],
        location: "Tokyo",
        startDate: "1st Feb 2025",
        duration: "6 months",
        stipend: "$1800/month",
        mode: "Hybrid",
      },
      {
        title: "Natural Language Generation",
        description: "Work on NLP-based text generation models.",
        company: "Amelia Miller",
        skills: ["NLP", "Transformer Models", "PyTorch"],
        location: "Remote",
        startDate: "5th Feb 2025",
        duration: "4 months",
        stipend: "$1200/month",
        mode: "Work from home",
      },
    ],
  },
  {
    id: 8,
    title: "Software Testing Automation",
    internships: [
      {
        title: "Test Automation",
        description: "Automate test cases using Selenium.",
        company: "Henry Wilson",
        skills: ["Selenium", "JUnit", "Java"],
        location: "Remote",
        startDate: "15th Feb 2025",
        duration: "3 months",
        stipend: "$1000/month",
        mode: "Work from home",
      },
      {
        title: "Performance Testing",
        description: "Test system performance under load.",
        company: "Harper Davis",
        skills: ["JMeter", "LoadRunner", "Python"],
        location: "Melbourne",
        startDate: "1st Mar 2025",
        duration: "5 months",
        stipend: "$900/month",
        mode: "Offline",
      },
    ],
  },
  {
    id: 9,
    title: "Python Programming",
    internships: [
      {
        title: "Python Scripting",
        description: "Develop automation scripts with Python.",
        company: "Jack Harris",
        skills: ["Python", "Automation", "Scripting"],
        location: "Remote",
        startDate: "5th Mar 2025",
        duration: "4 months",
        stipend: "$1300/month",
        mode: "Work from home",
      },
      {
        title: "Data Processing with Python",
        description: "Process large datasets using Python.",
        company: "Grace Turner",
        skills: ["Pandas", "NumPy", "Data Manipulation"],
        location: "Seattle",
        startDate: "10th Mar 2025",
        duration: "6 months",
        stipend: "$1500/month",
        mode: "Hybrid",
      },
    ],
  },
  {
    id: 10,
    title: "Java Programming",
    internships: [
      {
        title: "Java Backend Development",
        description: "Build scalable backend systems with Java.",
        company: "David Clark",
        skills: ["Spring Boot", "Java", "Microservices"],
        location: "Chicago",
        startDate: "1st Apr 2025",
        duration: "6 months",
        stipend: "$1400/month",
        mode: "Offline",
      },
      {
        title: "Java Web Development",
        description: "Create web applications using Java and JSP.",
        company: "Zoe Evans",
        skills: ["JSP", "Servlets", "HTML"],
        location: "Remote",
        startDate: "10th Apr 2025",
        duration: "4 months",
        stipend: "$1200/month",
        mode: "Work from home",
      },
    ],
  },
];

const InterCard = () => {
  const { id } = useParams();
  const internshipId = parseInt(id, 10);
  const selectedInternship = internshipData.find(
    (item) => item.id === internshipId
  );
  const navigate = useNavigate(); // useNavigate hook here

  const handleDownload = () => {
    navigate("/contact"); // Correct usage of navigate here
    toast.success("Redirecting to contact page.");
  };

  return (
    <Layout>
      <div className="internships-detail-page">
        <div className="internships-detail-header">
          <h1 className="courses-title-card">{selectedInternship.title}</h1>
          <p className="internships-desc">
            Explore and apply to internships with Technova Internships
          </p>
          <p className="hashtag">#Explore Technova Internships</p>
        </div>
      </div>

      <div className="internship-card-container">
        <div className="internship-detail-page">
          <div className="internships-detail-list">
            {selectedInternship.internships.map((internship, index) => (
              <div key={index} className="internship-detail-card">
                <h2>{internship.title}</h2>
                <p>{internship.description}</p>
                <p>
                  <strong>Company:</strong> {internship.company}
                </p>
                <p>
                  <strong>Skills required:</strong>
                </p>
                <ul>
                  {internship.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
                <p>
                  <strong>Start Date:</strong> {internship.startDate}
                </p>
                <p>
                  <strong>Duration:</strong> {internship.duration}
                </p>
                <p>
                  <strong>Mode:</strong> {internship.mode}
                </p>
                <button className="apply-btn" onClick={handleDownload}>
                  Apply here
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InterCard;
