import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Pune, Maharashtra, India
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> 123456789
            </p>
            <p>
              <i className="fas fa-envelope"></i> contact@TechNova.com
            </p>
            <div className="contact-socials">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
