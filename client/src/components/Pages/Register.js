import React from "react";
// import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">CREATE ACCOUNT</h2>
          <form>
            <div className="input-group">
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="input-group">
              <input type="tel" required />
              <label>Mobile Number</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label>Security Question: Your first pet's name?</label>
            </div>
            <button type="submit" className="login-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
