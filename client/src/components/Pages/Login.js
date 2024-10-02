import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
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
          <img className="register-logo" alt="login-logo" src="/tech3.png" />
          <h1>Technova Softwares</h1>
          <p>Navigating Beyond Limits</p>
          <img src="/login-img.png" alt="login-img" />
          <p>
            "Join our community to kickstart your data career. Register for top
            courses, internships, and projects to become a skilled data
            professional."
          </p>
        </div>

        <div className="login-card">
          <div className="wrap">
            <h2 className="login-title">
              Login <i className="fa-solid fa-user-plus"></i>
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <button
            type="submit"
            className="forgot-btn"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Password
          </button>
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

export default Login;
