import React, { useState } from "react";
import profilePic from "../assets/hero/shashank.png";
import phoneIcon from "../assets/contact/phone.svg";
import mailIcon from "../assets/contact/mail.svg";
import resumeFile from "../../public/shashank_shenvi_resume.pdf";
import "./../styles/heroSection.css";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="hero">
      <img src={profilePic} alt="Shashank Profile" className="hero-img" />
      <h1>
        <span>I am Shashank,</span> FullStack Developer
      </h1>
      <p>
        I specialize in <b>building high-performance</b> and <b>scalable</b>{" "}
        backend systems using <b>Java, Spring, and Hibernate</b>. Passionate
        about <b>efficiency</b> and <b>security</b>, I am now expanding into
        full-stack development to create seamless end-to-end applications.
      </p>
      <div className="hero-action">
        <button
          className="hero-connect"
          onClick={() => setShowPopup(!showPopup)}
        >
          Let’s Connect
        </button>
        <a
          href={resumeFile}
          download="Shashank_Resume.pdf"
          className="hero-resume"
        >
          Download Resume
        </a>
      </div>

      {/* Contact Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close-btn" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <h3>Let's Connect</h3>
            <div className="popup-icons">
              <a href="tel:+919482699824" className="icon">
                <img src={phoneIcon} alt="Call" />
              </a>
              <a href="mailto:shashankshenvi04@gmail.com" className="icon">
                <img src={mailIcon} alt="Mail" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
