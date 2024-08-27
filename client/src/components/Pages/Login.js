import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">LOGIN INTO YOUR ACCOUNT</h2>
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
            <button type="submit" className="login-btn">
              Submit
            </button>
          </form>
          <div className="forgot-password">
            <Link to="">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
