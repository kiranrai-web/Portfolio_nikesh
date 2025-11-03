import React from "react";
import { FaDailymotion, FaEdit, FaSoundcloud } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";

import "./Services.css";

const Services = () => {
  return (
    <div
      className="section__padding services__container p__roboto"
      id="service"
    >
      <h1>Services</h1>
      <p>
        I provide professional video editing, motion graphics, sound design, and
        color grading
        <br /> services tailored to your brand’s needs.
      </p>
      <div className="service__boxes">
        <div className="service-box">
          <FaEdit color="#3B82F6" fontSize={42} />
          <h2>Video Editing </h2>
          <p>
            Transforming raw footage into polished, engaging, and professional
            videos effectively.
          </p>
        </div>
        <div className="service-box">
          <FaDailymotion color="#3B82F6" fontSize={42} />
          <h2>Motion Graphics </h2>
          <p>
            Creating dynamic animations that enhance storytelling and visual
            communication.
          </p>
        </div>
        <div className="service-box">
          <FaSoundcloud color="#3B82F6" fontSize={42} />
          <h2>Sound Design </h2>
          <p>
            Designing immersive audio to elevate emotion and audience
            experience.
          </p>
        </div>
        <div className="service-box">
          <MdColorLens color="#3B82F6" fontSize={42} />
          <h2>Color Grading </h2>
          <p>
            Adjusting colors to create consistent, cinematic, and visually
            stunning footage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
