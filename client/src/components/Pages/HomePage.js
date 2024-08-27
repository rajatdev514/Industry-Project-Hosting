import React, { useState } from "react";
import Layout from "../Layout/Layout";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/1200x400?text=Educational+Image+1",
    "https://via.placeholder.com/1200x400?text=Educational+Image+2",
    "https://via.placeholder.com/1200x400?text=Educational+Image+3",
  ];
  const courses = [
    {
      title: "Web Development Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$100",
      instructor: "John Doe",
      image:
        "https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Data Science Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$120",
      instructor: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Machine Learning Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$150",
      instructor: "Mark Johnson",
      image:
        "https://images.unsplash.com/photo-1720048171527-208cb3e93192?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cybersecurity Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$200",
      instructor: "Emily Davis",
      image:
        "https://plus.unsplash.com/premium_photo-1723632256277-b34f59e30179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
    },
    {
      title: "Cloud Computing Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$80",
      instructor: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1723754166126-cadbccbe8820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Artificial Intelligence Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$110",
      instructor: "Sarah Wilson",
      image:
        "https://plus.unsplash.com/premium_photo-1718198497330-08b58f749d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Blockchain Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$90",
      instructor: "Chris Lee",
      image:
        "https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "DevOps Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$130",
      instructor: "Ashley Garcia",
      image:
        "https://images.unsplash.com/photo-1721332155484-5aa73a54c6d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Internet of Things (IoT) Course",
      description: "Lorem ipsum dolor sit amet.",
      price: "$140",
      instructor: "Ryan Martinez",
      image:
        "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTF8fHxlbnwwfHx8fHw%3D",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Layout>
      {/* Carousel */}

      <div className="main-container">
        <div className="left">
          <h1>Technova Solutions </h1>

          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn">Enroll Now </button>
        </div>
        <div className="right"></div>
      </div>

      <div className="middle">
        <h2>Invest in your carrer with us</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <div className="benefits">
          <div className="wrapup">
            <div className="one">
              <i className="fa-solid fa-school"></i>

              <p>learn anything</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>

            <div className="one">
              <i className="fa-solid fa-school"></i>

              <p>learn anything</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>

            <div className="one">
              <i className="fa-solid fa-school"></i>

              <p>learn anything</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>

            <div className="one">
              <i className="fa-solid fa-school"></i>

              <p>learn anything</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}

      <h2 className="heading">check out the courses !</h2>

      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Price: {course.price}</p>
            <p>Instructor: {course.instructor}</p>
          </div>
        ))}
      </div>

      <div className="searchbtn">
        <h3>Search here to see the course you are looking for</h3>
        <div className="search-box">
          <input type="text" placeholder="search here......" />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
          />
        </div>

        <div className="popular">
          <p>Popular</p>

          <a href="#">Data science</a>
          <a href="#">cyber security</a>
          <a href="#">blockchain</a>
          <a href="#">AI/ML</a>
          <a href="#">web Development</a>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
