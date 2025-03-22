import React from "react";
import profilePic from "../assets/hero/shashank.png";
import "../styles/aboutMe.css";
export const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <div className="title-decor"></div>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I specialize in developing fast and optimized back-end systems
              using <strong>Java, Spring, and Hibernate</strong>. One of my key
              projects includes designing the{" "}
              <strong>Dynamic Returns portal</strong>, which enables users to
              create customizable data submission templates and seamlessly
              upload data.
            </p>
            <p>
              My expertise includes{" "}
              <strong>
                MySQL schema design, SQL & HQL queries, and data optimization
              </strong>
              . I have built and maintained <strong>RESTful APIs</strong> to
              ensure seamless frontend-backend communication, optimized
              performance through <strong>code profiling</strong>, and
              implemented robust security measures such as{" "}
              <strong>data encryption and user authentication</strong>.
            </p>
            <p>
              Additionally, I work closely with{" "}
              <strong>
                QA teams, frontend developers, and product managers
              </strong>{" "}
              to deliver efficient, scalable, and high-performing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
