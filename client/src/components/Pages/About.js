import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <section className="content-section">
          <div className="text-content">
            <h2 className="section-title">About Us</h2>
            <p className="section-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              vero quasi perspiciatis illum officia corporis sequi provident
              molestias. Officia suscipit accusantium pariatur et magnam,
              laudantium vero at quod modi in!
            </p>
          </div>
          <div className="image-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="About Us"
              className="section-image"
            />
          </div>
        </section>

        <section className="content-section">
          <div className="image-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Training"
              className="section-image"
            />
          </div>
          <div className="text-content">
            <h2 className="section-title">Training</h2>
            <p className="section-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              fugiat similique, blanditiis asperiores molestias nulla vel esse
              deleniti tempore, magnam accusantium repellat quae qui sed sint
              eum, quo iste modi!
            </p>
            <Link to="/training" className="section-button">
              Learn More
            </Link>
          </div>
        </section>

        <section className="content-section">
          <div className="text-content">
            <h2 className="section-title">Internships</h2>
            <p className="section-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              totam reiciendis id eveniet, provident architecto accusantium
              maxime vel odio quia suscipit rerum possimus tenetur asperiores
              recusandae? Perferendis omnis officiis dignissimos?
            </p>
            <Link to="/internships" className="section-button">
              Explore Internships
            </Link>
          </div>
          <div className="image-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Internships"
              className="section-image"
            />
          </div>
        </section>

        <section className="content-section">
          <div className="image-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Live Projects"
              className="section-image"
            />
          </div>
          <div className="text-content">
            <h2 className="section-title">Live Projects</h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              libero vel consequuntur aspernatur possimus, quo excepturi
              consequatur veritatis corporis non omnis ad ab ducimus alias quod
              minima hic explicabo asperiores.
            </p>
            <Link to="/live-projects" className="section-button">
              View Projects
            </Link>
          </div>
        </section>

        <section className="content-section">
          <div className="text-content">
            <h2 className="section-title">Careers</h2>
            <p className="section-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              libero quam, reprehenderit ipsum quia labore eius doloribus ipsa
              molestias a repellat in officia blanditiis quisquam autem nulla
              quasi! Dolore, necessitatibus?
            </p>
            <Link to="/careers" className="section-button">
              Join Us
            </Link>
          </div>
          <div className="image-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Careers"
              className="section-image"
            />
          </div>
        </section>

        <section className="team-section">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-container">
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="team-photo"
              />
              <h3 className="team-name">John Doe</h3>
              <p className="team-role">CEO & Founder</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="team-photo"
              />
              <h3 className="team-name">Jane Smith</h3>
              <p className="team-role">CTO</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="team-photo"
              />
              <h3 className="team-name">Emily Johnson</h3>
              <p className="team-role">Head of Training</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 4"
                className="team-photo"
              />
              <h3 className="team-name">Michael Brown</h3>
              <p className="team-role">Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
