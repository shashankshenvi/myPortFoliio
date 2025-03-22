import React from "react";
import "../styles/footer.css";
import linkedinIcon from "../assets/contact/linkedin-icon.svg";
import githubIcon from "../assets/contact/githubIcon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Shashank Shenvi | Java Developer
        </p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/shashank-shenvi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
          <a
            href="https://github.com/shashankshenvi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
