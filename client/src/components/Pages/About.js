import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../Slider/Slider";

const About = () => {
  return (
    <Layout>
      <div className="about-us">
        <div className="aboutus-header">
          <section className="intro">
            <h1>Who We Are ?</h1>
          </section>
          <p className="intro-p">
            " <span className="random">TechNova Software</span> specializes in
            providing comprehensive software development, skill-based training,
            and consulting services to a diverse range of clients. Our firm
            combines technical expertise with strategic insights to deliver
            tailored solutions that empower businesses to thrive in the digital
            age."
          </p>
        </div>

        {/* <Slider /> */}

        <div className="service-heading">Our Services</div>
        <hr className="hr" />
        <section className="service-section">
          <div className="service">
            <img
              src="/image2.png"
              alt="Software Development"
              className="service-img"
            />
            <div className="service-description add ">
              <h2>Software Development Services</h2>

              <p>
                <h3 className="aboutspan">Custom Software Development:</h3> We
                design and develop bespoke software solutions tailored to meet
                the unique needs and challenges of our clients. Our expertise
                spans across web applications, mobile apps, enterprise
                solutions, and more.
              </p>
              <p>
                <h3 className="aboutspan">
                  Software Integration and Modernization:
                </h3>{" "}
                We help businesses integrate new technologies with existing
                systems to enhance efficiency and functionality. Our team
                ensures seamless transitions and minimal disruptions during the
                modernization process.
              </p>
              {/* <p>
                <h3 className="aboutspan">
                  Software Maintenance and Support:
                </h3>{" "}
                We provide ongoing maintenance and support services to ensure
                that our clients' software applications remain secure,
                up-to-date, and optimized for performance.{" "}
              </p>  */}
            </div>
          </div>

          <div className="service">
            <img
              src="/image1.png"
              alt="Training Services"
              className="service-img"
            />
            <div className="service-description ">
              <h2>Skill-based Training Services</h2>

              <p>
                <h3 className="aboutspan">Technical Training Programs:</h3> We
                offer comprehensive training programs designed to enhance
                technical skills and proficiency. Our courses cover a wide range
                of topics, including programming languages, latest in demand
                technologies, and more.
              </p>
              <p>
                <h3 className="aboutspan">Customized Training Solutions:</h3> We
                develop customized training solutions tailored to the specific
                needs of organizations. Our flexible training programs can be
                delivered onsite or online, providing convenience and
                flexibility for our clients.
              </p>
            </div>
          </div>

          <div className="service">
            <img
              src="/image3.png"
              alt="Consulting Services"
              className="service-img"
            />
            <div className="service-description add  change">
              <h2>IT Consulting Services</h2>

              <p>
                <h3 className="aboutspan">Strategic IT Consulting:</h3> We
                partner with businesses to provide strategic IT consulting
                services aimed at aligning technology initiatives with business
                goals. Our consultants offer expert guidance on IT strategy
                development, digital transformation, IT infrastructure
                optimization, and more.
              </p>
              <p>
                <h3 className="aboutspan">Project Management:</h3> We provide
                project management expertise to oversee the successful execution
                of IT projects from inception to completion. Our proactive
                approach ensures that projects are delivered on time, within
                budget, and to the highest quality standards.
              </p>
            </div>
          </div>
        </section>

        <div className="service-note">
          {/* <img
              src="/sample.jpeg"
              alt="Consulting Services"
              className="service-img"
            /> */}
          <div className="service-note-text">
            {/* <h2>IT Consulting Services</h2> */}
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
            <button className="creative-button">Internship</button>
          </Link>

          <Link to="/projects">
            <button className="creative-button">Projects</button>
          </Link>

          <Link to="/training">
            <button className="creative-button">Training</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
