import React, { useState, useEffect } from "react";
import "../styles/skills.css";
import skillsData from "../data/skills.json";

// Preload images dynamically
const images = import.meta.glob("../assets/skills/*", { eager: true });

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    console.log("Loading skills from local JSON...");

    // Map skills data and replace imageSrc with the correct imported path
    const updatedSkills = skillsData.map((skill) => ({
      ...skill,
      imageSrc: images[`../assets/${skill.imageSrc}`]?.default || "",
    }));

    setSkills(updatedSkills);
  }, []);

  return (
    <section className="skillsContainer" id="skills">
      <h2 className="skillsHeader">Skills</h2>
      <div className="skillsGrid">
        {skills.map((skill, id) => (
          <div key={id} className="skill">
            <div className="skillImageContainer">
              <img src={skill.imageSrc} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
