import React from "react";
import history from "../data/history.json";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-header">Experience</h2>

      <div className="experience-grid">
        {history.map((item, id) => (
          <div key={id} className="experience-item">
            <div className="text-container">
              <h3 className="role-header">
                {item.role} <br /> {item.organisation}
              </h3>
              <p className="dates">
                {item.startDate} - {item.endDate}
              </p>
              <ul className="experiences">
                {item.experiences.map((exp, idx) => (
                  <li key={idx}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
