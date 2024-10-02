import React, { useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  // Array of districts
  const districts = [
    "Mumbai, Maharashtra, India",
    "Pune, Maharashtra, India",
    // Other districts...
  ];

  // Sort districts alphabetically
  const sortedDistricts = districts.sort();

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: [],
    location: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle checkbox
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

  // Handle form submission
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
              {/* Social links... */}
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
