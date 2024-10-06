import React, { useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const districts = [
    "Ahmednagar, Maharashtra, India",
    "Akola, Maharashtra, India",
    "Amravati, Maharashtra, India",
    "Aurangabad, Maharashtra, India",
    "Beed, Maharashtra, India",
    "Bhandara, Maharashtra, India",
    "Buldhana, Maharashtra, India",
    "Chandrapur, Maharashtra, India",
    "Dhule, Maharashtra, India",
    "Gadchiroli, Maharashtra, India",
    "Gondia, Maharashtra, India",
    "Hingoli, Maharashtra, India",
    "Jalgaon, Maharashtra, India",
    "Jalna, Maharashtra, India",
    "Kolhapur, Maharashtra, India",
    "Latur, Maharashtra, India",
    "Mumbai, Maharashtra, India",
    "Nagpur, Maharashtra, India",
    "Nanded, Maharashtra, India",
    "Nandurbar, Maharashtra, India",
    "Nashik, Maharashtra, India",
    "Osmanabad, Maharashtra, India",
    "Palghar, Maharashtra, India",
    "Parbhani, Maharashtra, India",
    "Pune, Maharashtra, India",
    "Raigad, Maharashtra, India",
    "Ratnagiri, Maharashtra, India",
    "Sangli, Maharashtra, India",
    "Satara, Maharashtra, India",
    "Sindhudurg, Maharashtra, India",
    "Solapur, Maharashtra, India",
    "Thane, Maharashtra, India",
    "Wardha, Maharashtra, India",
    "Washim, Maharashtra, India",
    "Yavatmal, Maharashtra, India",
    "other...",
  ];

  const sortedDistricts = districts.sort();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: [],
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        enquiry: checked
          ? [...prevData.enquiry, value]
          : prevData.enquiry.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/contact", formData);
      if (response.data.success) {
        toast.success("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiry: [],
          location: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <Layout>
      <div className="contact-page">
        <div className="contact-card">
          <div className="contact-title">Get in Touch</div>
          <p className="contact-description">
            We'd love to hear from you! Fill out the form or reach out through
            our social links.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <img
                src="/contact1.png"
                alt="Contact Us"
                className="contact-image"
              />
              {/* Add email and phone number */}
              <p className="contact-email">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:technovasoftwares@gmail.com ">
                  technovasoftwares@gmail.com
                </a>
              </p>
              <p className="contact-phone">
                <i class="fa-solid fa-phone"></i>+91-8600149970
              </p>

              {/* Social links with icons */}
              <div className="social-links">
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github social-icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin social-icon"></i>
                </a>
                <a
                  href="https://www.instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram social-icon"></i>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Enquiry About</label>
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        value="Training"
                        onChange={handleChange}
                        checked={formData.enquiry.includes("Training")}
                      />
                      Training
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Internship"
                        onChange={handleChange}
                        checked={formData.enquiry.includes("Internship")}
                      />
                      Internship
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Projects"
                        onChange={handleChange}
                        checked={formData.enquiry.includes("Projects")}
                      />
                      Projects
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Other"
                        onChange={handleChange}
                        checked={formData.enquiry.includes("Other")}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      -- Select Your Location --
                    </option>
                    {sortedDistricts.map((district, index) => (
                      <option key={index} value={district.toLowerCase()}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
