import React, { useState } from "react";
import "./contact.css"; // Assuming you have a Contact.css file
import locationIcon from "../images/location-icon.png";
import emailIcon from "../images/email-icon.png";
import phoneIcon from "../images/phone-icon.png";
import contactDec from "../images/contact-dec.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Message sent successfully!");
      } else {
        console.error("Form submission failed.");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div id="contact" className="contact-container">
      <div className="form-container">
        <div className="form-row">
          <div className="form-heading wow fadeIn">
            <h2>Contact Us</h2>
            <h4>Get In Touch With Us Now</h4>
            <div className="line-decoration"></div>
          </div>
        </div>
        <div className="form-row wow fadeInUp">
          <form id="contactForm" action="" method="post" onSubmit={handleSubmit}>
            <div className="contact-decoration">
              <img src={contactDec} alt="" />
            </div>
            <div className="form-content">
              <div className="form-row">
                <div className="contact-info">
                  <div className="icon">
                    <img src={phoneIcon} alt="" />
                    <a href="tel:+9779840033029">+977 9840033029</a>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="icon">
                    <img src={emailIcon} alt="" />
                    <a href="mailto:sobinthapa1@gmail.com">sobinthapa1@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="icon">
                    <img src={locationIcon} alt="" />
                    <a href="googlemaps.com">Kathmandu, Nepal</a>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>

                  <button type="submit" id="form-submit" className="submit-button">
                    Send Message Now
                  </button>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
