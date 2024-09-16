import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Someting went wrong");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="main-body">
      <div className="login-container">
        <div className="register-changes">
          <img className="register-logo" src="/tech2.png" />
          <h1>Technova Softwares</h1>
          <p>Navigating Beyond Limits</p>
          <img src="register-logo.png" alt="register-img" />
          <p>
            "Join our community to kickstart your data career. Register for top
            courses, internships, and projects to become a skilled data
            professional."
          </p>
        </div>

        <div className="login-card">
          <div className="wrap">
            <h2 className="login-title">
              Register <i class="fas fa-user-check"></i>
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group starlabel">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </div>
            <div className="input-group starlabel">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label>Mobile Number</label>
            </div>
            <div className="input-group starlabel">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-group starlabel">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            {/* <div className="input-group">
              <input type="text" required />
              <label>Security Question: Your first pet's name?</label>
            </div> */}
            <button type="submit" className="login-btn">
              Register <i class="fas fa-smile"></i>
            </button>
          </form>

          <div className="recheck">
            <p>Already have an account?</p>
            <button
              className="login-btn-registerpage"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <p>
              By signing up, you agree to <br />
              our <span className="terms">Terms and Conditions</span> and{" "}
              <span className="terms">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
