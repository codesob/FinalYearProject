import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IonIcon } from '@ionic/react';
import { personOutline, calendarOutline, transgenderOutline, callOutline, locationOutline, mailOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

import './signup.config.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const validateAge = (age) => {
    return age >= 12 && age <= 100;
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAge(formData.age)) {
      toast.error("Registration failed. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/signup",
        formData
      );

      console.log("User registered successfully", response.data);
      if (response.status === 200) {
        toast.success("Registration successful");
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed", error.response.data);
      setError(
        error.response.data.message || "Registration failed. Please try again."
      );
      toast.error("Registration failed. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="sign">
        <ToastContainer />
        <div className="signup-form-box">
          <div className='form-value'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="signup-input-box">
                <IonIcon icon={personOutline}></IonIcon>
                <input
                  type="text"
                  required
                  placeholder=""
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label>Name</label>
              </div>
              <div className="signup-input-box">
                <IonIcon icon={calendarOutline}></IonIcon>
                <input
                  type="number"
                  required
                  placeholder=""
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
                <label>Age</label>
              </div>
              <div className="signup-input-box">
                <IonIcon icon={transgenderOutline}></IonIcon>
                <input
                  type="text"
                  required
                  placeholder=""
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <label>Gender</label>
              </div>
              <div className="signup-input-box">
                <IonIcon icon={callOutline}></IonIcon>
                <input
                  type="tel"
                  required
                  placeholder=""
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                <label>Phone Number</label>
              </div>
              <div className="signup-input-box">
                <IonIcon icon={locationOutline}></IonIcon>
                <input
                  type="text"
                  required
                  placeholder=""
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                <label>Address</label>
              </div>
              <div className="signup-input-box">
                <IonIcon icon={mailOutline}></IonIcon>
                <input
                  type="email"
                  required
                  placeholder=""
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label>Email</label>
              </div>
              <div className="signup-input-box">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder=""
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <IonIcon
                  icon={showPassword ? eyeOffOutline : eyeOutline}
                  onClick={togglePasswordVisibility}
                ></IonIcon>
                <label>Password</label>
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit">Sign Up</button>
              <div className="signup-register">
                <p>Already have an account?</p>
                <Link to="/login"><p>Login</p></Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
