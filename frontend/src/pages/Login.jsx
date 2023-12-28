import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.config.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",  // Note the lowercase "login"
        formData
      );

      console.log("User logged in successfully", response.data);
      if (response.status === 200) {
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed", error.response.data);
      setError(
        error.response.data.message || "Login failed. Please try again."
      );
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <section className="login">
      <ToastContainer />
      <div className="form-box">
        <div className="form-value">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                required
                placeholder=""
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label>Email</label> {error && <div className="error-message">{error}</div>}
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                placeholder=""
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <label>Password</label> {error && <div className="error-message">{error}</div>}
            </div>
           
            <div className='forget'>
              <Link to="/forgot-password">Forgot password</Link>
            </div><button type="submit">Login</button>
            <div className="register">
              <p>Don't have an account?</p>
              <Link to="/signup">
                <p>Sign Up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
