import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./signup.config.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/signup",
        formData
      );

      console.log("User registered successfully", response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Registration failed", error.response.data);
      setError(
        error.response.data.message || "Registration failed. Please try again."
      );
    }
  };
 
  return (
    <section className="sign">
      <div className="signup-form-box">
      <div className='form-value'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-input-box">
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label>Name</label>
          </div>
          <div className="signup-input-box">
            <ion-icon name="calendar-outline"></ion-icon>
            <input
              type="number"
              required
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <label>Age</label>
          </div>
          <div className="signup-input-box">
            <ion-icon name="transgender-outline"></ion-icon>
            <input
              type="text"
              required
              placeholder="Gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
            <label>Gender</label>
          </div>
          <div className="signup-input-box">
            <ion-icon name="call-outline"></ion-icon>
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            <label>Phone Number</label>
          </div>
          <div className="signup-input-box">
            <ion-icon name="location-outline"></ion-icon>
            <input
              type="text"
              required
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <label>Address</label>
          </div>
          <div className="signup-input-box">
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label>Email</label>
          </div>
          <div className="signup-input-box">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <label>Password</label>
          </div>
          <div className="signup-input-box">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="password"
              required
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            <label>Confirm Password</label>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Sign Up</button>
          <div className="signup-register">
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Signup;
