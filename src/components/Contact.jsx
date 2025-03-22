import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import mailIcon from "../assets/contact/mail.svg";
import locationIcon from "../assets/contact/location.png";
import phoneIcon from "../assets/contact/phone.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill out all fields.");
      return;
    }

    emailjs
      .send(
        "firefist", // Replace with EmailJS Service ID
        "firefist_temp", // Replace with EmailJS Template ID
        formData,
        "lK9RMU3TAb-DltnH7" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          setStatusMessage("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatusMessage("Failed to send email. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h2>For More Information</h2>
          <p>
            I am always eager to take on new challenges and contribute my
            expertise as a Java Developer to innovative projects. If you're
            looking for a dedicated developer who thrives in solving complex
            problems, feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="Email" />
              <p>shashankshenvi04@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phoneIcon} alt="Phone" />
              <p>+91 9482699824</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="Location" />
              <p>
                Siddhivinayak Society (CHS), Ashok Smruti C.H.S.L., Thane -
                Belapur Rd, Vitawa, Kalwa, Thane, Maharashtra 400605
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="contact-right" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Write Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
