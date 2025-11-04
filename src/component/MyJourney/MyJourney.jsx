import React from "react";

import "./MyJourney.css";

export default function MyJourney() {
  const timelineData = [
    {
      year: "Aug 2024 – Nov 2025",
      title: "Video Editor | TNC",
      description:
        "I edited videos, handling narrative, sound, motion graphics, music, and color grading.",
    },
    {
      year: "Nov 2024 – Jul 2025",
      title: "Video Editor | TNC Unscripted",
      description:
        "Edited various video formats, managing narrative, sound, motion graphics, music, and color grading.",
    },
    {
      year: "Sep 2025 – Oct 2025",
      title: "Reels Editor | 8848 Momo House",
      description:
        "Edited social media videos with B-rolls, text, captions, transitions, and consistent storytelling.",
    },
    {
      year: " 2025 – Present",
      title: "Freelance Video Editor",
      description:
        "Created videos with animations, sound, and color grading, tailored to client brand and audience.",
    },
  ];

  return (
    <>
      <div className="journey-container p__roboto">
        <h2 className="journey-title">My Journey</h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
