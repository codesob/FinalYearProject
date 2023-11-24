import "./contact.css";
import locationIcon from "../images/location-icon.png";
import emailIcon from "../images/email-icon.png";
import phoneIcon from "../images/phone-icon.png";
import contactdec from "../images/contact-dec.png";

import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="form contact-us section">
      <div className="container1">
        <div className="row1">
          <div className="col-lg-6 offset-lg-3">
            <div
              className="section-heading wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h6>Contact Us</h6>
              <h4>Get In Touch With Us Now</h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div
            className="col-lg-12 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.25s"
          >
            <form id="contact-form" action="" method="post">
              <div className="row1">
                <div className="col-lg-12">
                  <div className="contact-dec">
                    <img src={contactdec} alt="" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="fill-form">
                    <div className="row1">
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src={phoneIcon} alt="" />
                            <a href="#">9840033029</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src={emailIcon} alt="" />
                            <a href="#">sobinthapa41@gmail.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src={locationIcon} alt="" />
                            <a href="#">Basundhara, Kathmandu</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          autoComplete="on"
                          required
                        />

                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email"
                          required=""
                        />

                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          autoComplete="on"
                        />
                      </div>
                      <div className="col-lg-6">
                        <textarea
                          name="message"
                          type="text"
                          className="form-control"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
