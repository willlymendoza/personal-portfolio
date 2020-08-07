import React, { Fragment } from "react";
import AboutCard from "../AboutCard";
import "./styles.scss";

const AboutSkillsContainer = ({ skills }) => {
  return (
    <div className="about-skills-container">
      {skills.map((skill) => (
        <AboutCard key={skill.label} skill={skill} />
      ))}
    </div>
  );
};

export default AboutSkillsContainer;
