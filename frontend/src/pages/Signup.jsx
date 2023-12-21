import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.config.css";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("age", age);
      formData.append("gender", gender);
      formData.append("phoneNumber", phoneNumber);
      formData.append("address", address);
      formData.append("photo", photo[0]);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);

      const response = await axios.post(
        "http://localhost:4000/api/users/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <section className="sign">
      <div className="signup-form-box">
        <div className="signup-form-value">
          <form action="">
            <h2>Sign Up</h2> 
            
            <div className="signup-label-upload">
              <input
                type="file"
                accept="image/*"
                id="signup-photo-input"
                onChange={handlePhotoChange}
              />
            </div>
            <div className="signup-input-box">
              <ion-icon name="person-outline"></ion-icon>
              <input
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>
            <div className="signup-input-box">
              <ion-icon name="calendar-outline"></ion-icon>
              <input
                type="number"
                required
                placeholder="Age"
                value={age}
                onChange={(e) => {
                  const newAge = parseInt(e.target.value, 10);
                  if (!isNaN(newAge) && newAge >= 1) {
                    setAge(newAge);
                  } else {
                    setAge(1);
                  }
                }}
              />
              <label>Age</label>
            </div>
            <div className="signup-input-box">
              <ion-icon name="transgender-outline"></ion-icon>
              <input
                type="text"
                required
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Gender</label>
            </div>

            <div className="signup-input-box">
              <ion-icon name="call-outline"></ion-icon>
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label>Phone Number</label>
            </div>
            <div className="signup-input-box">
              <ion-icon name="location-outline"></ion-icon>
              <input
                type="text"
                required
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label>Address</label>
            </div>

            <div className="signup-input-box">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="signup-input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div className="signup-input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label>Confirm Password</label>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button onClick={handleSignUp}>Sign Up</button>
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
