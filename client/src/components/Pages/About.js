import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Layout>
      <div className="about-us">
        <div className="aboutus-header">
          <div className="left-para">
            <section className="intro">
              <h1>Who We Are ?</h1>
            </section>
            <p className="intro-p">
              " <span className="random">TechNova Software</span> specializes in
              providing comprehensive software development, skill-based
              training, and consulting services to a diverse range of clients.
              Our firm combines technical expertise with strategic insights to
              deliver tailored solutions that empower businesses to thrive in
              the digital age."
            </p>
          </div>
          <div className="right-para">
            <img src="/about.png" alt="" />
          </div>
        </div>

        <div className="service-heading">Our Services</div>
        <hr className="hr" />
        <section className="service-section">
          <div className="service-card row">
            <div className="col-md-6 service-img-wrapper">
              <img
                src="/image1.gif"
                alt="Software Development"
                className="service-img1"
              />
            </div>
            <div className="col-md-6 service-text">
              <h2>Software Development Services</h2>
              <p>
                <strong>Custom Software Development:</strong> We design and
                develop bespoke software solutions tailored to meet the unique
                needs and challenges of our clients. Our expertise spans across
                web applications, mobile apps, enterprise solutions, and more.
              </p>
              <p>
                <strong>Software Integration and Modernization:</strong> We help
                businesses integrate new technologies with existing systems to
                enhance efficiency and functionality. Our team ensures seamless
                transitions and minimal disruptions during the modernization
                process.
              </p>
            </div>
          </div>

          <div className="service-card row reverse-row">
            <div className="col-md-6 service-text">
              <h2>Skill-based Training Services</h2>
              <p>
                <strong>Technical Training Programs:</strong> We offer
                comprehensive training programs designed to enhance technical
                skills and proficiency. Our courses cover a wide range of
                topics, including programming languages, latest in demand
                technologies, and more.
              </p>
              <p>
                <strong>Customized Training Solutions:</strong> We develop
                customized training solutions tailored to the specific needs of
                organizations. Our flexible training programs can be delivered
                onsite or online, providing convenience and flexibility for our
                clients.
              </p>
            </div>
            <div className="col-md-6 service-img-wrapper">
              <img
                src="/image2.gif"
                alt="Training Services"
                className="service-img2"
              />
            </div>
          </div>

          <div className="service-card row">
            <div className="col-md-6 service-img-wrapper">
              <img
                src="/image3.gif"
                alt="Consulting Services"
                className="service-img3"
              />
            </div>
            <div className="col-md-6 service-text">
              <h2>IT Consulting Services</h2>
              <p>
                <strong>Strategic IT Consulting:</strong> We partner with
                businesses to provide strategic IT consulting services aimed at
                aligning technology initiatives with business goals. Our
                consultants offer expert guidance on IT strategy development,
                digital transformation, IT infrastructure optimization, and
                more.
              </p>
              <p>
                <strong>Project Management:</strong> We provide project
                management expertise to oversee the successful execution of IT
                projects from inception to completion. Our proactive approach
                ensures that projects are delivered on time, within budget, and
                to the highest quality standards.
              </p>
            </div>
          </div>
        </section>

        <div className="service-note">
          <div className="service-note-text">
            <p>
              TechNova Software, we are committed to delivering innovative
              solutions and exceptional service to our clients. Whether you are
              looking to develop cutting-edge software, enhance technical skills
              through training, or leverage strategic IT insights, we are here
              to help you achieve your business objectives.
            </p>
          </div>
        </div>
        <div className="button-container">
          <Link to="/internship">
            <button className="creative-button">
              <span>Internship</span>
            </button>
          </Link>
          <Link to="/projects">
            <button className="creative-button">
              <span>Projects</span>
            </button>
          </Link>
          <Link to="/training">
            <button className="creative-button">
              <span>Training</span>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
