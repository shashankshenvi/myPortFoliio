import React from "react";
import "../styles/experience.css";
import history from "../data/history.json";

export const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-header">Experience</h2>

      <div className="experience-grid">
        {history.map((historyItem, id) => (
          <div key={id} className="experience-item">
            {/* Role & Organization */}
            <div className="text-container">
              <h3 className="role-header">
                {historyItem.role} <br /> {historyItem.organisation}
              </h3>
              <p className="dates">
                {historyItem.startDate} - {historyItem.endDate}
              </p>

              {/* Work Experience List */}
              <ul className="experiences">
                {historyItem.experiences.map((experience, idx) => (
                  <li key={idx}>{experience}</li>
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
