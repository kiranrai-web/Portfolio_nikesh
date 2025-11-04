import React from 'react';

import "./SkillsSlider.css"

export default function SkillsProgress() {
  const skills = [
    { name: " Motion Graphics (After Effects)", percentage: 80 },
    { name: "Color Grading & Correction", percentage: 75 },
    { name: "Transitions & Visual Effects", percentage: 85 },
    { name: "Social Media Content Editing", percentage: 90 }
  ];

  return (
    <>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar-wrapper">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${skill.percentage}%` }}
              />
              <div 
                className="progress-dot" 
                style={{ left: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}