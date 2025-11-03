import React from 'react';

import "./SkillsSlider.css"

export default function SkillsProgress() {
  const skills = [
    { name: " Adobe After Effects & Adobe Premiere Pro", percentage: 90 },
    { name: "Narrative Editing & Storytelling", percentage: 80 },
    { name: "Sound Design & Background Music Integration", percentage: 75 },
    { name: "Color Grading", percentage: 60 },
    { name: "2D Animation & Motion Graphics", percentage: 70 }
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