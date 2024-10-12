import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
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

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="main-body">
      <div className="login-container">
        <div className="register-changes">
          <img className="register-logo" alt="login-logo" src="/tech2.png" />
          <h1>Technova Softwares</h1>
          <p>Navigating Beyond Limits</p>
          <img src="/forgot-img.jpeg" alt="forgot-page" />
          <p>
            "Join our community to kickstart your data career. Register for top
            courses, internships, and projects to become a skilled data
            professional."
          </p>
        </div>

        <div className="login-card">
          <div className="wrap">
            <h2 className="login-title">
              Reset Password <i className="fa-solid fa-user-plus"></i>
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
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
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
              <label>Which is your favourite sport</label>
            </div>
            <div className="input-group starlabel">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label>New Password</label>
            </div>

            <button type="submit" className="reset-btn">
              Reset
            </button>
          </form>
          <div className="recheck">
            <p>Don't have account?</p>
            <button
              className="login-btn-registerpage"
              onClick={handleRegisterClick}
            >
              Register
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

export default ForgotPassword;
